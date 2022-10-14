import { UserProfileRepositoryService } from './repository/user-profile-repository.service';
import { ConfirmDialogService } from './../../../shared/services/confirm-dialog.service';
import { MotiveRepositoryService } from './../motive/repository/motive-repository.service';
import { AddProfileComponent } from './addProfile/addProfile.component';
import { SearchRequestComponent } from './../../utils/search-request/search-request.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = "PROFIL";

  displayedColumns: string[] = [
    "description","status","actions"
   ];

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
    private userProfileRepositoryService: UserProfileRepositoryService,
    private cRef: ChangeDetectorRef,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    this.isLoadingData = true;
    this.userProfileRepositoryService.findAll().subscribe((data: any) => {
      this.dataSource.data = data;
      this.data = data;
      this.dataSource.paginator = this.paginator;
      this.isLoadingData = false;
    });
    this.cRef.detectChanges();
  }

  add() {
    const dialogRef = this.dialog.open(AddProfileComponent, {
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
    const dialogRef = this.dialog.open(AddProfileComponent, {
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
        this.userProfileRepositoryService.delete(row?.id).subscribe(
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


/*   search() {
    const dialogRef = this.dialog.open(SearchRequestComponent, {
      panelClass: "app-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result.isRefresh) {
      }
    });
  } */
}
/* 
const ELEMENT_DATA: data[] = [

  {
    id: 0,
    status:"Actif",
    description: "Admin",

  },
];

export interface data {
  id: number;
  status: string;
  description: string;
} */