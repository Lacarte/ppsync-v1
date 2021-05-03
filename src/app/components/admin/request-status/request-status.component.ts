import { AddRequestStatusComponent } from './addRequest-status/addRequest-status.component';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { AddRequestComponent } from '../../process/register/add-request/add-request.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  title = "ÉTAT DE LA REQUÊTE";

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
    const dialogRef = this.dialog.open(AddRequestStatusComponent, {
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
    description: "Passport Disponible",

  },
  
    {
    id: 0,
    status:"Actif",
    description: "Passport Abandonné",

  },
  {
    id: 0,
    status:"Actif",
    description: "Requête Annulée",

  },
  {
    id: 0,
    status:"Actif",
    description: "Requête Envoyée a Washington",

  },
  {
    id: 0,
    status:"Actif",
    description: "Passport Livré",

  },
];


export interface data {
  id: number;
  status: string;
  description: string;
}