import { environment } from "../../../../../environments/environment.dev";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class RequestStatusRepositoryService {
  constructor(private httpClient: HttpClient) {}

  findOne() {}

  findAll() {
    return this.httpClient.get(`${apiUrl}/request-statuses?_sort=id:desc`);
  }

  save(formData: any) {
    return this.httpClient.post(`${apiUrl}/request-statuses`, formData);
  }

  update(formData: any, id:number) {
    return this.httpClient.put(`${apiUrl}/request-statuses/${id}`, formData);
  }

  delete(id: number) {
    return this.httpClient.delete(`${apiUrl}/request-statuses/${id}`);
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
