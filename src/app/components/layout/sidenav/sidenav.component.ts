import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { BreakpointsService } from "src/app/shared/services/breakpoints.service";
import { MenuTogglerService } from "src/app/shared/services/menu-toggler.service";
import { UIService } from "src/app/shared/services/ui.service";
import { FullscreenService } from "src/app/shared/services/fullscreen/fullscreen.service";
import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { AppInfoComponent } from "src/app/shared/components/app-info/app-info.component";
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
    public fullscreenService: FullscreenService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.isLtMdSub = this.uiService.getIsLtMd().subscribe((x) => {
      this.opened = !x;
      this.isLtMd = x;
    });
  }

  logout() {}

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

  disconnect() {
    this.authenticationService.logout();
  }

  onToggleFullscreen() {
    this.fullscreenService.toggle();
  }

  ngOnDestroy(): void {
    this.isLtMdSub.unsubscribe();
  }

  appInfo() {
    const dialogRef = this.dialog.open(AppInfoComponent, {
      panelClass: "app-dialog",
      width: "480px",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result.isRefresh) {
      }
    });
  }
}
