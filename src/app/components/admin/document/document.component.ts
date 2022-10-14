import { ConfirmDialogService } from './../../../shared/services/confirm-dialog.service';
import { DoctypeRepositoryService } from './repository/doctype-repository.service';
import { AddDocumentComponent } from './addDocument/addDocument.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddRequestComponent } from '../../process/register/add-request/add-request.component';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { MatDialog } from "@angular/material/dialog";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  title = "TYPE DE DOCUMENT";

  displayedColumns: string[] = ["description","status","actions"  ];

  dataSource = new MatTableDataSource([]);
  isLoadingData: boolean;
  data: any[] = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }
  
  constructor(
    private dialog: MatDialog,
    private doctypeRepositoryService: DoctypeRepositoryService,
    private cRef: ChangeDetectorRef,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    this.isLoadingData = true;
    this.doctypeRepositoryService.findAll().subscribe((data: any) => {
      this.dataSource.data = data;
      this.data = data;
      this.dataSource.paginator = this.paginator;
      this.isLoadingData = false;
    });
    this.cRef.detectChanges();
  }

  add() {
    const dialogRef = this.dialog.open(AddDocumentComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.isRefresh) {
        this.loadData();
        this.dataSource.filter = "";
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    });
  }

  update(row: any) {
    const dialogRef = this.dialog.open(AddDocumentComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
      data:row
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.isRefresh) {
        this.loadData();
      }
    });
  }

  delete(row: any) {
    this.confirmDialogService.open({
      title: "Eliminez?",
      message: `Voulez vous Eliminez <span class="enfasis">${row.description} </span>?`,
      cancelText: "Non",
      confirmText: "Confirmé",
    });

    this.confirmDialogService.confirmed().subscribe((isOk) => {
      if (isOk) {
        this.doctypeRepositoryService.delete(row?.id).subscribe(
          (data: any) => {
            this.loadData();
          },
          (error) => {
            this.confirmDialogService.open({
              title: "Erreur?",
              message: `Il s'est produit une erreur en eliminant <span class="enfasis">${row.description}</span>?`,
              confirmText: "Fermé",
            });
            this.loadData();
            console.error("error deleting : ", error);
          }
        );
      }
    });
}
}
/* 
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
 */