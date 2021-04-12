
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-addRequest-status',
  templateUrl: './addRequest-status.component.html',
  styleUrls: ['./addRequest-status.component.css']
})
export class AddRequestStatusComponent implements OnInit {

 
  title= "ENREGISTRER ETAT DE REQUÊTE";

  actionNotification = {
  isVisible: false,
  messageType: 'success',
  message: "Savegardé avec succès."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddRequestStatusComponent>,

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

