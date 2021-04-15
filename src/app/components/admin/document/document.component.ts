import { AddDocumentComponent } from './addDocument/addDocument.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddRequestComponent } from '../../process/register/add-request/add-request.component';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  title = "TYPE DE DOCUMENT";

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
    const dialogRef = this.dialog.open(AddDocumentComponent, {
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
    description: "Carte d'identité",

  },

  {
    id: 0,
    status:"Actif",
    description: "RUT",

  },

  {
    id: 0,
    status:"Actif",
    description: "Passport",

  },
];





export interface data {
  id: number;
  status: string;
  description: string;
}