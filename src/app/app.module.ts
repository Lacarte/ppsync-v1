import { UserProfileRepositoryService } from './components/admin/profile/repository/user-profile-repository.service';
import { DoctypeRepositoryService } from './components/admin/document/repository/doctype-repository.service';
import { MotiveRepositoryService } from './components/admin/motive/repository/motive-repository.service';
import { LoginRepositoryService } from './components/login/repository/login-repository.service';
import { TestComponent } from './experimental/test/test.component';
import { AppInfoComponent } from "./shared/components/app-info/app-info.component";
import { AddProfileComponent } from "./components/admin/profile/addProfile/addProfile.component";
import { AddRequestStatusComponent } from "./components/admin/request-status/addRequest-status/addRequest-status.component";
import { AddDocumentComponent } from "./components/admin/document/addDocument/addDocument.component";
import { AddMotiveComponent } from "./components/admin/motive/addMotive/addMotive.component";
import { RequestStatusComponent } from "./components/admin/request-status/request-status.component";
import { LogComponent } from "./components/report/log/log.component";
import { RequestComponent } from "./components/report/request/request.component";
import { AddUserComponent } from "./components/admin/user/addUser/addUser.component";
import { MotiveComponent } from "./components/admin/motive/motive.component";
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
import { FilterProfile } from "./pipes/ListFilter.pipe";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RequestStatusRepositoryService } from './components/admin/request-status/repository/request-status-repository.service';
import { NgDompurifyModule } from '@tinkoff/ng-dompurify';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgDompurifyModule,
    HttpClientModule
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
    AddUserComponent,
    RequestComponent,
    LogComponent,
    RequestStatusComponent,
    AddMotiveComponent,
    AddDocumentComponent,
    AddProfileComponent,
    AddRequestStatusComponent,
    TestComponent,
    FilterProfile,
    AppInfoComponent,
    
    
  ],
  entryComponents: [
    AddRequestComponent,
    SearchRequestComponent,
    AddUserComponent,
    AddMotiveComponent,
    AddDocumentComponent,
    AddRequestStatusComponent,
    AddProfileComponent,
    AppInfoComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoginRepositoryService,
    RequestStatusRepositoryService,
    MotiveRepositoryService,
    DoctypeRepositoryService,
    UserProfileRepositoryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
