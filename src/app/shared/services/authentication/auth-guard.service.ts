import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Route,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  constructor(
    protected router: Router,
    protected authenticationService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (
      state.url !== "/login" &&
      !this.authenticationService.isAuthenticated()
    ) {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
