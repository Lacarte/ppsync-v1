import { FullscreenService } from './services/fullscreen/fullscreen.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./components/loader/loader.component";
import { MaterialModule } from "./material-module/material.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderService } from "./services/loader.service";
import { LoaderInterceptor } from "./services/loader.interceptor";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UIService } from "./services/ui/ui.service";
import { MenuTogglerService } from "./services/ui/menu-toggler.service";
import { ActionNotificationComponent } from './components/action-notification/action-notification.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [MaterialModule, FlexLayoutModule, LoaderComponent,ActionNotificationComponent,LoadingComponentComponent],
  declarations: [LoaderComponent, LoaderComponent, ActionNotificationComponent, LoadingComponentComponent],
  providers: [
    LoaderService,UIService,MenuTogglerService,FullscreenService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class SharedModule {}
