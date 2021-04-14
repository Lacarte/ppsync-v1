import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormBuilder,
} from "@angular/forms";
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";
import { environment } from "../../../environments/environment";
import { Login } from "../../interfaces/login";
import { Router } from "@angular/router";

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
    email: null,
    password: null,
  };

  hide = true;

  // form: FormGroup;
  private formSubmitAttempt: boolean;

  public loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),

    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.emailRegex),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    // public authenticationService: AuthenticationService,
    // private uiService: UIService,
    // private dataService: DataService,
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) {
    // this.authenticationService.logout();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public initializeFormGroup(): void {
    this.loginForm.setValue({
      $key: null,
      email: "",
      password: "",
    });
  }

  onSubmit(form: NgForm): void {
    console.log("form.valid => ", form.valid);

    // if (form.valid) {
    //   this.authenticationService.signIn(this.login);
    // }
  }

  public onLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(["/"]);
    }
  }

  openBottomSheet(): void {
    // this.bottomSheet.open(LoginBottomsheetComponent);
  }
}
