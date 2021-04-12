import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-addDocument',
  templateUrl: './addDocument.component.html',
  styleUrls: ['./addDocument.component.css']
})
export class AddDocumentComponent implements OnInit {

  title= "ENREGISTRER TYPE DOCUMENT";

  actionNotification = {
  isVisible: false,
  messageType: 'success',
  message: "Savegardé avec succès."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddDocumentComponent>,

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