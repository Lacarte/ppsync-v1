import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
 projectName = environment.projectName;

  public constructor(private titleService: Title) { 
   this.setTitle(this.projectName);
  }

    public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
