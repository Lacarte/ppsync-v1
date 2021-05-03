import { environment } from "./../../../../../environments/environment.dev";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class UserProfileRepositoryService {
  constructor(private httpClient: HttpClient) {}

  findOne() {}

  findAll() {
    return this.httpClient.get(`${apiUrl}/user-profiles?_sort=id:desc`);
  }

  save(formData: any) {
    return this.httpClient.post(`${apiUrl}/user-profiles`, formData);
  }

  update(formData: any, id:number) {
    return this.httpClient.put(`${apiUrl}/user-profiles/${id}`, formData);
  }

  delete(id: number) {
    return this.httpClient.delete(`${apiUrl}/user-profiles/${id}`);
  }

  create() {}


  /* 
  delete() {}
   
  findOne() {}

  findAll() {}

  create() {}

  update() {}

  delete() {} 
  
  */
}
