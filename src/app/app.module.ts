import { MotiveComponent } from './components/admin/motive/motive.component';
import { DocumentComponent } from "./components/admin/document/document.component";
import { ProfileComponent } from "./components/admin/profile/profile.component";
import { UserComponent } from "./components/admin/user/user.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchRequestComponent } from "./components/utils/search-request/search-request.component";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ShellComponent } from "./components/shell/shell.component";
import { AppRoutingModule } from "./app-routing.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OutletWrapperComponent } from "./components/outlet-wrapper/outlet-wrapper.component";
import { RegisterComponent } from "./components/process/register/register.component";
import { DeliverComponent } from "./components/process/deliver/deliver.component";
import { AddRequestComponent } from "./components/process/register/add-request/add-request.component";
import { TstComponent } from "./components/tst/tst.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ShellComponent,
    RegisterComponent,
    SidenavComponent,
    OutletWrapperComponent,
    DeliverComponent,
    AddRequestComponent,
    SearchRequestComponent,
    DashboardComponent,
    MotiveComponent,
    UserComponent,
    ProfileComponent,
    DocumentComponent,
    TstComponent,
  ],
  entryComponents: [AddRequestComponent, SearchRequestComponent],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
