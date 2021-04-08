import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {MatTableDataSource} from '@angular/material/table';
import { AddPassportComponent } from "./add-passport/add-passport.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  title = "ENREGISTRER";

 displayedColumns: string[] = ['formId', 'passport','req_date','lastName', 'firstName', 'nif' , 'tel','status' ,'actions'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  public addPassport() {
    const dialogRef = this.dialog.open(AddPassportComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
   
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result.isRefresh) {
      }
    }); 
  }


  public searchRequest() {
    const dialogRef = this.dialog.open(SearchRequestComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
   
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result.isRefresh) {
      }
    }); 
  }




}



const ELEMENT_DATA: requestFormat[] = [
  {formId: '1', passport: 'SA2342425', req_date: '10/20/2021', firstName: 'Prophete',lastName:'Djerry',nif:'435353566',tel:'9677464635',status:'demande'},
  {formId: '2', passport: 'SA2342425', req_date: '10/20/2021', firstName: 'Prophete',lastName:'Djerry',nif:'435353566',tel:'9677464635',status:'demande'},
  {formId: '3', passport: 'SA2342425', req_date: '10/20/2021', firstName: 'Prophete',lastName:'Djerry',nif:'435353566',tel:'9677464635',status:'demande'},
  {formId: '4', passport: 'SA2342425', req_date: '10/20/2021', firstName: 'Prophete',lastName:'Djerry',nif:'435353566',tel:'9677464635',status:'demande'},
  {formId: '5', passport: 'SA2342425', req_date: '10/20/2021', firstName: 'Prophete',lastName:'Djerry',nif:'435353566',tel:'9677464635',status:'demande'},
  {formId: '6', passport: 'SA2342425', req_date: '10/20/2021', firstName: 'Prophete',lastName:'Djerry',nif:'435353566',tel:'9677464635',status:'demande'},

];





export interface requestFormat {
  formId: string;
  passport: string;
  req_date: string;
  firstName: string;
  lastName: string;
  nif: string;
  tel: string;
  status: string;
}