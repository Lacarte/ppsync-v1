import { ConfirmDialogService } from './../../../shared/services/confirm-dialog.service';
import { AddRequestStatusComponent } from './addRequest-status/addRequest-status.component';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from '@angular/material/sort';
import { RequestStatusRepositoryService } from './repository/request-status-repository.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  title = "ÉTAT DE LA REQUÊTE";

  displayedColumns: string[] = ["description","status","actions" ];

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
    private requestStatusRepositoryService: RequestStatusRepositoryService,
    private cRef: ChangeDetectorRef,
    private confirmDialogService: ConfirmDialogService,
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadData();
  }


  loadData() {
    this.isLoadingData = true;
    this.requestStatusRepositoryService.findAll().subscribe((data: any) => {
      this.dataSource.data = data;
      this.data = data;
      this.dataSource.paginator = this.paginator;
      this.isLoadingData = false;
    });
    this.cRef.detectChanges();
  }


  add() {
    const dialogRef = this.dialog.open(AddRequestStatusComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.isRefresh) {
        this.dataSource.filter = "";
        this.loadData();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
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
        this.requestStatusRepositoryService.delete(row?.id).subscribe(
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


  update(row: any) {
    const dialogRef = this.dialog.open(AddRequestStatusComponent, {
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

}
/* const ELEMENT_DATA: data[] = [

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
} */