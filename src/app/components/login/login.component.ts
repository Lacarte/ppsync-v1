import { AppUserAuth } from './../../shared/interfaces/app-user-auth';
import { AuthenticationService } from './../../shared/services/authentication/authentication.service';
import { ActionNotification } from "./../../shared/interfaces/action-notification";
import { LoginRepositoryService } from "./repository/login-repository.service";
import { Component, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  NgForm,
  UntypedFormBuilder,
} from "@angular/forms";
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";
import { environment } from "../../../environments/environment";
import { Login } from "../../interfaces/login";
import { Router } from "@angular/router";
import { debounceTime, tap } from "rxjs/operators";

// import { AuthService } from '../../services/auth.service';
// import { SidenavService } from '../sidenav/sidenav.service';
// import { DataService } from '../../services/data.service';
// import { Login } from '../../interfaces/login';
// import { LoginBottomsheetComponent } from '../login-bottomsheet/login-bottomsheet.component';
// import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  emailRegex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  projectName = environment.projectName;
  projectVersion = environment.projectVersion;

  login: Login = {
    identifier: null,
    password: null,
  };

  actionNotification: ActionNotification = {
    isVisible: false,
    messageType: "default",
    message: "Échec d'authentification",
  };

  hide = true;

  // form: FormGroup;
  private formSubmitAttempt: boolean;

  public loginForm: UntypedFormGroup = new UntypedFormGroup({
    $key: new UntypedFormControl(null),

    identifier: new UntypedFormControl("dev.lacarte@gmail.com", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.emailRegex),
    ]),
    password: new UntypedFormControl("develop", [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private fb: UntypedFormBuilder,
    public authenticationService: AuthenticationService,
    // private uiService: UIService,
    // private dataService: DataService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private loginRepositoryService: LoginRepositoryService
  ) {
    // this.authenticationService.logout();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loginForm.valueChanges
      .pipe(
        debounceTime(500),
        tap((x) => {
          this.actionNotification = {
            isVisible: false,
            messageType: "default",
            message: "",
          };
        })
      )
      .subscribe();
  }

  public initializeFormGroup(): void {
    this.loginForm.setValue({
      email: "",
      password: "",
    });
  }

  onSubmit(form: NgForm): void {}

  public onLogin() {
    if (this.loginForm.valid) {
      this.loginRepositoryService.login(this.loginForm.value).subscribe(
        (data:AppUserAuth) => {
          console.log("data", data);
          this.authenticationService.login(data)
        },
        (error) => {
          if (sessionStorage.getItem("currentUser") !== null) {
            sessionStorage.removeItem('currentUser');
          }

          console.log("error", error);
          this.actionNotification = {
            isVisible: true,
            messageType: "error",
            message: "Échec d'authentification",
          };
        }
      );
      // this.router.navigate(["/"]);
    }
  }

  openBottomSheet(): void {
    // this.bottomSheet.open(LoginBottomsheetComponent);
  }
}
