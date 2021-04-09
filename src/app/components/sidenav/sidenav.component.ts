import { FullscreenService } from '../../shared/services/ui/fullscreen/fullscreen.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { SidenavService } from "./sidenav.service";
import { DOCUMENT } from "@angular/common";

// import { ConnectionService } from 'ng-connection-service';
// import { DialogLogoutComponent } from '../dialogs/dialog-logout/dialog-logout.component';
// import { PingServerService } from '../../services/ping-server.service';
// import { AppUserAuth } from '../../security/app-user-auth';
import { Subscription } from "rxjs";
import { UIService } from "../../shared/services/ui/ui.service";
import { MenuTogglerService } from "../../shared/services/ui/menu-toggler.service";
import { AfterViewInit } from '@angular/core';
// import { AuthenticationService } from '../../services/authentication.service';

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
