import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: "root",
})
export class LoginRepositoryService {
  constructor(private httpClient: HttpClient){

  }


  login(formData :any) {
    return this.httpClient.post(
      `${apiUrl}/auth/local`,formData
    ); 
  }

}
