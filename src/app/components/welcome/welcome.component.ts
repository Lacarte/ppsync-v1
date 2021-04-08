import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 projectName = environment.projectName;
 propertyOf=environment.propertyOf;
  constructor() { }

  ngOnInit(): void {
  }

}
