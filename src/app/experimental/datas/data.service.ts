import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { productsData, usersData } from './datas';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {


  createDb() {
    const users = usersData;
    const products = productsData;
    return { users, products };
  }

}
