import { environment } from "./../../../../../environments/environment.dev";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class MotiveRepositoryService {
  constructor(private httpClient: HttpClient) {}

  findOne() {}

  findAll() {
    return this.httpClient.get(`${apiUrl}/request-motives?_sort=id:desc`);
  }

  saveMotive(formData: any) {
    return this.httpClient.post(`${apiUrl}/request-motives`, formData);
  }

  updateMotive(formData: any, id:number) {
    return this.httpClient.put(`${apiUrl}/request-motives/${id}`, formData);
  }

  delete(id: number) {
    return this.httpClient.delete(`${apiUrl}/request-motives/${id}`);
  }

  create() {}

  update() {}

  /* 
  delete() {}
   
  findOne() {}

  findAll() {}

  create() {}

  update() {}

  delete() {} 
  
  */
}
