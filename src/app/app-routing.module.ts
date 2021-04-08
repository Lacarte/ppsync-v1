import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DeliverComponent } from "./components/process/deliver/deliver.component";
import { RegisterComponent } from "./components/process/register/register.component";
import { ShellComponent } from "./components/shell/shell.component";
import { TstComponent } from "./components/tst/tst.component";
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
      { path: "register", component: RegisterComponent },
      { path: "deliver", component: DeliverComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "tst", component: TstComponent },
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
