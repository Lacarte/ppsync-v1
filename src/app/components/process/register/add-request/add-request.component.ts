import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  title= "ENREGISTRER UN REQUÊTE";

  actionNotification = {
  isVisible: true,
  messageType: 'success',
  message: "Savegarder avec succes."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddRequestComponent>,

) { }

  ngOnInit() {
  }


 onClickCancel(): void {
    this.dialogRef.close({isRefresh:false});
  }





}