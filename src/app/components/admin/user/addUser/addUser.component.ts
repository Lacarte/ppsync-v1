import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {


  title= "ENREGISTRER UN UTILISATEUR";

  actionNotification = {
  isVisible: false,
  messageType: 'success',
  message: "Savegardé avec succès."
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddUserComponent>,

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



  displayFn(o: any): string {
    return o && o.name ? o.name : '';
  }



}