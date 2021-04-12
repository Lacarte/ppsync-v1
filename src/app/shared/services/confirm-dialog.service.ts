import { Injectable } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {
  constructor(public dialog: MatDialog) {}

  dialogRef: MatDialogRef<ConfirmDialogComponent>;

  public open(options) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: "app-dialog",
      // maxWidth: '400px',
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
      },
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }

  public showError(errorMessage) {
    this.open({
      title: 'Error',
      message: `  ${errorMessage}'`,
      confirmText: 'OK',
    });
  }


  public showErr(err, detailMessage, title?: string) {
    this.open({
      title: !!title ? 'Error' : title,
      message: ` ${err} , ${detailMessage}'`,
      confirmText: 'OK',
    });
  }



  public showErrorApi(err, detailMessage?) {

    let error = (typeof err === 'string') ? JSON.parse(err) : err;
    console.error(`${detailMessage} , error : ${error} '`);

     let detail =  detailMessage ? `${detailMessage} :: ` : '';

    this.open({
      title: 'Error' ,
      message: ` ${detail} ${error.errorMessage}'`,
      confirmText: 'OK',
    });

  }






}
