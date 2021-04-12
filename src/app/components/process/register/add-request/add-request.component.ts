import { Component, Inject, OnInit } from '@angular/core';
import {
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
  isVisible: false,
  messageType: 'success',
  message: "Savegardé avec succès."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddRequestComponent>,

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