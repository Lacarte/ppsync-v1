import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-passport',
  templateUrl: './add-passport.component.html',
  styleUrls: ['./add-passport.component.css']
})
export class AddPassportComponent implements OnInit {

  title= "ENREGISTRER UN REQUÊTE";

  actionNotification = {
  isVisible: true,
  messageType: 'success',
  message: "Savegarder avec succes."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddPassportComponent>,

) { }

  ngOnInit() {
  }


 onCancelClick(): void {
    this.dialogRef.close({isRefresh:false});
  }





}