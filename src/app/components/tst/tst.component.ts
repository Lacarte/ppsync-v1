import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tst",
  templateUrl: "./tst.component.html",
  styleUrls: ["./tst.component.css"]
})
export class TstComponent implements OnInit {
  constructor() {}
  
 title="test";

  actionNotification = {
  isVisible: true,
  messageType: 'success',
  message: "Savegarder avec succes."
  }


  ngOnInit() {}

  onClickCancel(){

}

}
