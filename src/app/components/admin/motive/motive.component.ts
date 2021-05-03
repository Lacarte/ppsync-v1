import { ConfirmDialogService } from "./../../../shared/services/confirm-dialog.service";
import { ConfirmDialogComponent } from "./../../../shared/components/confirm-dialog/confirm-dialog.component";
import { MotiveRepositoryService } from "./repository/motive-repository.service";
import { AddMotiveComponent } from "./addMotive/addMotive.component";
import { SearchRequestComponent } from "./../../utils/search-request/search-request.component";
import { AddRequestComponent } from "../../process/register/add-request/add-request.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { STATES } from "src/app/core/enums/states.enum";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-motive",
  templateUrl: "./motive.component.html",
  styleUrls: ["./motive.component.css"],
})
export class MotiveComponent implements OnInit {
  title = "Mofif de la demande";
  displayedColumns: string[] = ["description", "status", "actions"];
  states = STATES;

  dataSource = new MatTableDataSource([]);
  isLoadingData: boolean;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
    private motiveRepositoryService: MotiveRepositoryService,
    private cd: ChangeDetectorRef,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    this.isLoadingData = true;
    this.motiveRepositoryService.findAll().subscribe((data: any[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.isLoadingData = false;
    });
    this.cd.detectChanges();
  }

  add() {
    const dialogRef = this.dialog.open(AddMotiveComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.isRefresh) {
        this.loadData();
      }
    });
  }

  update(row: any) {
    const dialogRef = this.dialog.open(AddMotiveComponent, {
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
        this.motiveRepositoryService.delete(row?.id).subscribe(
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

    /*   
      dialogRef.afterClosed().subscribe((result) => {
      if (result?.isRefresh) {
      this.loadData();
      }
      });
      */
  }

  search() {
    const dialogRef = this.dialog.open(SearchRequestComponent, {
      panelClass: "app-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.isRefresh) {
        this.loadData();
      }
    });
  }
}
/* 
const ELEMENT_DATA: data[] = [
  {
    id: 0,
    status: "Actif",
    description: "Passport Perdu",
  },
  {
    id: 0,
    status: "Actif",
    description: "Changement Renseignements",
  },
  {
    id: 0,
    status: "Actif",
    description: "Demande de Passeport",
  },
  {
    id: 0,
    status: "Actif",
    description: "Renouvellement",
  },
];
 */
export interface data {
  id: number;
  status: string;
  description: string;
}
