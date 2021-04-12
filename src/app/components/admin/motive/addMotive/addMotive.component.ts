import { Component, Inject, OnInit } from '@angular/core';

import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-addMotive',
  templateUrl: './addMotive.component.html',
  styleUrls: ['./addMotive.component.css']
})
export class AddMotiveComponent implements OnInit {

  title= "ENREGISTRER UN MOTIF";

  actionNotification = {
  isVisible: false,
  messageType: 'success',
  message: "Savegardé avec succès."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddMotiveComponent>,

) { }

  ngOnInit() {
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
          this.onClickCancel();
      }
  });
  }


 onClickCancel(): void {
    this.dialogRef.close({isRefresh:false});
  }





}