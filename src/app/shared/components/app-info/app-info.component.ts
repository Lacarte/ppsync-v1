import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  title = "App Info !";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AppInfoComponent>
  ) {}

  ngOnInit() {}

  onClickOK(): void {
    this.dialogRef.close({ isRefresh: false });
  }
}
