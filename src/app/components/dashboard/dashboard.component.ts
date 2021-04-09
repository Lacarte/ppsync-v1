import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   title="Dashboard"

  constructor() { }

  ngOnInit() {
    let timer$  = timer(0,  2000);
  
    timer$.subscribe((x)=>{
          console.log('timer',x);
          },(err)=>{
          console.log('error',err);
        });
    


  }

 
  

}
