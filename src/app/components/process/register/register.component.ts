import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { MatDialog } from "@angular/material/dialog";
import {MatTableDataSource} from '@angular/material/table';
import { AddRequestComponent } from "./add-request/add-request.component";
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit,AfterViewInit {
  title = "ENREGISTRER";

 displayedColumns: string[] = ['formId', 'passport','req_date','lastName', 'firstName', 'nif' , 'tel','status' ,'actions'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  public addRequest() {
    const dialogRef = this.dialog.open(AddRequestComponent, {
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
      panelClass: "app-dialog",
      disableClose: true,
       });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result.isRefresh) {
      }
    }); 
  }




}



const ELEMENT_DATA: requestFormat[] = [
  {formId: '1242424', passport: 'PP2342425', req_date: '11/20/2021', firstName: 'Jerry',lastName:'Laratte',nif:'435353566',tel:'9677464635',status:'Requête Envoyée Washington'},
  {formId: '2242444', passport: 'SA2342425', req_date: '12/20/2021', firstName: 'Prophete',lastName:'Prophete',nif:'435353566',tel:'9677464635',status:'Requête Annulée'},
  {formId: '3567646', passport: 'PP2342425', req_date: '13/20/2021', firstName: 'Jimmy',lastName:'Jean Louis',nif:'435353566',tel:'9677464635',status:'Passport Abandoné'},
  {formId: '4467686', passport: 'PP2342425', req_date: '14/20/2021', firstName: 'David',lastName:'Prophete',nif:'435353566',tel:'9677464635',status:'Passport Livré'},
  {formId: '5857548', passport: 'TS2342425', req_date: '15/20/2021', firstName: 'Aristide',lastName:'J. Bertrand',nif:'435353566',tel:'9677464635',status:'Passport Livré'},
  {formId: '6377854', passport: 'CH2342425', req_date: '16/20/2021', firstName: 'Cesar',lastName:'Antoine',nif:'435353566',tel:'9677464635',status:'Passport Livré'},

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