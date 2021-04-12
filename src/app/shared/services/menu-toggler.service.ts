import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuTogglerService {


toggler = new Subject<boolean>();

constructor() { }

}
