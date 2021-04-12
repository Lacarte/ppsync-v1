import { AddMotiveComponent } from './addMotive/addMotive.component';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { AddRequestComponent } from '../../process/register/add-request/add-request.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-motive',
  templateUrl: './motive.component.html',
  styleUrls: ['./motive.component.css']
})
export class MotiveComponent implements OnInit {

   title = "Mofif de la demande";

  displayedColumns: string[] = [
    "description","status","actions"
   ];

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

  add() {
    const dialogRef = this.dialog.open(AddMotiveComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result.isRefresh) {
      }
    });
  }

  search() {
    const dialogRef = this.dialog.open(SearchRequestComponent, {
      panelClass: "app-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result.isRefresh) {
      }
    });
  }
}

const ELEMENT_DATA: data[] = [

  {
    id: 0,
    status:"Actif",
    description: "Passport Perdu",

  },
  {
    id: 0,
    status:"Actif",
    description: "Changement Renseignements",

  },
  {
    id: 0,
    status:"Actif",
    description: "Demande de Passeport",

  },
  {
    id: 0,
    status:"Actif",
    description: "Renouvellement",

  },
];



export interface data {
  id: number;
  status: string;
  description: string;
}