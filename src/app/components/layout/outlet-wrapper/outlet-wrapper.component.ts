import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet-wrapper',
  templateUrl: './outlet-wrapper.component.html',
  styleUrls: ['./outlet-wrapper.component.css']
})
export class OutletWrapperComponent implements OnInit {

year =  new Date().getFullYear();
validatorCounter:number=0;

  constructor() { }

  ngOnInit() {
  }



  devSetup(){
    if(this.validatorCounter === 7){
      console.log("get in")
      this.validatorCounter = 0;
    }
    this.validatorCounter++;
  }

}