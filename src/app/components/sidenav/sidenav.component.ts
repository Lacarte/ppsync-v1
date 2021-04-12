import { FullscreenService } from './../../shared/services/fullscreen/fullscreen.service';
import { UIService } from './../../shared/services/ui.service';
import { MenuTogglerService } from './../../shared/services/menu-toggler.service';
import { Subscription } from 'rxjs';
import { BreakpointsService } from './../../shared/services/breakpoints.service';
import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit, OnDestroy {
  isSidenaveText: boolean;
  ngStyle: string;
  isConnected = true;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;
  // securityObject: AppUserAuth = null;
  events: string[] = [];
  opened: boolean;
  over = "side";
  displayMode = "flat";
  private isLtMdSub: Subscription;
  isLtMd: boolean;

  constructor(
    public breakpointService: BreakpointsService,
    public menuTogglerService: MenuTogglerService,
    public dialog: MatDialog,
    public uiService: UIService,
    public fullscreenService:FullscreenService
  ) {
    }


  ngOnInit(): void {
       this.isLtMdSub = this.uiService.getIsLtMd().subscribe((x) => {
      this.opened = !x;
      this.isLtMd = x;
    });


 

  }
  

  logout(){
  }


  /* 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLogoutComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((isLogout: boolean) => {
      console.log('The dialog was closed');
      if (isLogout) {
        this.authService.logout();
        console.log('Logout...');
      }
    });
  } */


  onToggleFullscreen() {
    this.fullscreenService.toggle();
  }

  ngOnDestroy(): void {
    this.isLtMdSub.unsubscribe();
  }
}
