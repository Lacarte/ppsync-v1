import { AppUserAuth } from "./../../interfaces/app-user-auth";
import { tap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";
import { User } from "../../models/user";
import { Router } from "@angular/router";

const API_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<AppUserAuth>;
  public currentUser$: Observable<AppUserAuth>;

  private isServerConnectivitySubject: BehaviorSubject<boolean>;
  public isServerConnectivity$: Observable<boolean>;

  constructor(private router: Router) {
    
    this.currentUserSubject = new BehaviorSubject<AppUserAuth>(
      JSON.parse(sessionStorage.getItem("currentUser")) as AppUserAuth
    );
    
    this.currentUser$ = this.currentUserSubject.asObservable();

    this.isServerConnectivitySubject = new BehaviorSubject<boolean>(true);
    this.isServerConnectivity$ = this.isServerConnectivitySubject.asObservable();
  }

  public setCurrentUser(user: AppUserAuth): void {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  public get currentUserValue(): AppUserAuth {
    return this.currentUserSubject.value
      ? this.currentUserSubject.value
      : JSON.parse(sessionStorage.getItem("currentUser"));
  }

  public get isUserLoggedIn(): boolean {
    return !(this.currentUserSubject.value === null);
  }

  public setServerConnectivity(isOk: boolean): void {
    this.isServerConnectivitySubject.next(isOk);
  }

  public get currentServerConnectivityValue(): boolean {
    return this.isServerConnectivitySubject.value;
  }

  public isAuthenticated(): boolean {
    if (sessionStorage.getItem("currentUser") !== null) {
      let appUserAuth: AppUserAuth = JSON.parse(
        sessionStorage.getItem("currentUser")
      ) as AppUserAuth;
      return !appUserAuth?.user?.blocked;
    }
    return false;
  }

  login(data: AppUserAuth): any {
    //const jwtData = data.jwt.split(".")[1];
    console.log(" data =>", data);
    this.setCurrentUser(data);

    if (sessionStorage.getItem("currentUser") !== null) {
      let appUserAuth: AppUserAuth = JSON.parse(
        sessionStorage.getItem("currentUser")
      ) as AppUserAuth;
      if (!appUserAuth?.user?.blocked) {
        this.router.navigate([""]);
      }
    }
  }

  logout(): void {
    if (sessionStorage.getItem("currentUser") !== null) {
      sessionStorage.removeItem("currentUser");
    }
    this.router.navigate(["/login"]);
    this.currentUserSubject.next(null);
  }
}
