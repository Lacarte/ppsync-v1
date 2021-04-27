import { LogPublishersService } from './services/log-publishers/log-publishers.service';
import { LogService } from "./services/log-publishers/log.service";
import { ConfirmDialogService } from "./services/confirm-dialog.service";
import { LoaderInterceptor } from "./services/loader.interceptor";
import { BreakpointsService } from "./services/breakpoints.service";
import { FullscreenService } from "./services/fullscreen/fullscreen.service";
import { MenuTogglerService } from "./services/menu-toggler.service";
import { UIService } from "./services/ui.service";
import { LoaderService } from "./services/loader.service";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./components/loader/loader.component";
import { MaterialModule } from "./material-module/material.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ActionNotificationComponent } from "./components/action-notification/action-notification.component";
import { LoadingComponentComponent } from "./components/loading-component/loading-component.component";
import { getFrenchPaginatorIntl } from "./components/utils/french-paginator-intl";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
  
@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    LoaderComponent,
    ActionNotificationComponent,
    LoadingComponentComponent,
    ConfirmDialogComponent,
  ],
  declarations: [
    LoaderComponent,
    LoaderComponent,
    ActionNotificationComponent,
    LoadingComponentComponent,
    ConfirmDialogComponent,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [
    LoaderService,
    UIService,
    MenuTogglerService,
    FullscreenService,
    BreakpointsService,
    ConfirmDialogService,
    LogService,
    LogPublishersService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() },
  ],
})
export class SharedModule {}
