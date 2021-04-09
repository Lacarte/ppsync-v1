import { Subscription, Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

   title="Dashboard"
   timer$: Subscription; 


  constructor() { }


  ngOnInit() {
/*     this.timer$ = timer(0,  2000);
    this.timer$.subscribe((x)=>{
          console.log('timer',x);
          },(err)=>{
          console.log('error',err);
        });
     */


  }

 

  ngOnDestroy(): void {
    // this.timer$.unsubscribe();
  }

}
