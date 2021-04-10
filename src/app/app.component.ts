import { Subscription } from 'rxjs';
import { BreakpointsService } from './shared/services/ui/breakpoints.service';
import { Component, VERSION } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  private mediaSub: Subscription;
 projectName = environment.projectName;



  public constructor(private titleService: Title,
    private breakpointService: BreakpointsService,
    private mediaObserver: MediaObserver) { 
   this.setTitle(this.projectName);
   //console.log(">>>",this.name)
   this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
    this.breakpointService.mqAlias = change[1].mqAlias;
    console.log('this.breakpointService.mqAlias',this.breakpointService.mqAlias);
    });
  }

    public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
