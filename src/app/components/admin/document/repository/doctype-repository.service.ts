import { environment } from "./../../../../../environments/environment.dev";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class DoctypeRepositoryService {
  constructor(private httpClient: HttpClient) {}

  findOne() {}

  findAll() {
    return this.httpClient.get(`${apiUrl}/doctypes?_sort=id:desc`);
  }

  save(formData: any) {
    return this.httpClient.post(`${apiUrl}/doctypes`, formData);
  }

  update(formData: any, id:number) {
    return this.httpClient.put(`${apiUrl}/doctypes/${id}`, formData);
  }

  delete(id: number) {
    return this.httpClient.delete(`${apiUrl}/doctypes/${id}`);
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
