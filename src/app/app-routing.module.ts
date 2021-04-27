import { RequestStatusComponent } from './components/admin/request-status/request-status.component';
import { RequestComponent } from './components/report/request/request.component';
import { LogComponent } from './components/report/log/log.component';
import { UserComponent } from './components/admin/user/user.component';
import { MotiveComponent } from './components/admin/motive/motive.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { DocumentComponent } from './components/admin/document/document.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DeliverComponent } from "./components/process/deliver/deliver.component";
import { RegisterComponent } from "./components/process/register/register.component";
import { ShellComponent } from "./components/shell/shell.component";
import { TestComponent } from "./experimental/test/test.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "",
        component: WelcomeComponent
      },
      { path: "process/register", component: RegisterComponent },
      { path: "process/deliver", component: DeliverComponent },
      { path: "process/dashboard", component: DashboardComponent } ,
      { path: "admin/user", component: UserComponent },
      { path: "admin/motive", component: MotiveComponent },
      { path: "admin/profile", component: ProfileComponent  },
      { path: "admin/request-status", component: RequestStatusComponent  },
      { path: "admin/doctype", component: DocumentComponent },
      { path: "report/request", component: RequestComponent },
      { path: "report/log", component: LogComponent },
      { path: "dashboard", component: DashboardComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "test", component: TestComponent },
  {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
