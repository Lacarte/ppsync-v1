import { SearchRequestComponent } from "./../../utils/search-request/search-request.component";
import { AddPassportComponent } from "./../../process/register/add-passport/add-passport.component";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  title = "UTILISATEUR";

  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "tel",
    "profile",
    "docType",
    "documentNumber",
    "status",
    "actions",
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

  addUser() {
    const dialogRef = this.dialog.open(AddPassportComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result.isRefresh) {
      }
    });
  }

  searchUser() {
    const dialogRef = this.dialog.open(SearchRequestComponent, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result.isRefresh) {
      }
    });
  }
}

const ELEMENT_DATA: userData[] = [
  {
    id: 0,
    idter: 0,
    firstName: "Prophete",
    lastName: "Djerry",
    tel: "8093099340",
    documentNumber: "000000",
    profile: { id: 0, description: "Admin" },
    docType: { id: 0, description: "Passport" },
    status: { id: 0, description: "Active" },
  },
  {
    id: 1,
    idter: 1,
    firstName: "Prophete",
    lastName: "Djerry",
    tel: "8093099342",
    documentNumber: "0000000",
    profile: { id: 0, description: "Admin" },
    docType: { id: 0, description: "Passport" },
    status: { id: 0, description: "Active" },
  },
];

export interface userData {
  id: number;
  idter: number;
  firstName: string;
  lastName: string;
  tel: string;
  documentNumber: string;
  status: { id: number; description: string };
  docType: { id: number; description: string };
  profile: { id: number; description: string };
}
