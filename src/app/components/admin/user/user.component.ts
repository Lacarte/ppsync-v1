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
export class UserComponent implements OnInit,AfterViewInit {
  title = "UTILISATEUR";

  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "tel",
    "profile",
    "docType",
    "documentNumber",
    "status",
    "createAt",
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

/*   Active
  Banned
  Inactive
  Pending */
  

  {
    id: 0,
    idter: 0,
    firstName: "Prophete",
    lastName: "Francois",
    tel: "8093099340",
    documentNumber: "000000",
    profile: { id: 0, description: "Admin" },
    docType: { id: 0, description: "Passport" },
    status: { id: 0, description: "Actif" },
    createAt: 	"01/01/2021",

  },
  {
    id: 1,
    idter: 1,
    firstName: "Jean",
    lastName: "Louis",
    tel: "8093099342",
    documentNumber: "111111",
    profile: { id: 0, description: "Admin" },
    docType: { id: 0, description: "Passport" },
    status: { id: 0, description: "Inactif" },
    createAt: 	"02/01/2021",
  },
  {
    id: 1,
    idter: 1,
    firstName: "Lafontant",
    lastName: "Privers",
    tel: "8093099342",
    documentNumber: "22222222",
    profile: { id: 0, description: "Admin" },
    docType: { id: 0, description: "Passport" },
    status: { id: 0, description: "Annulé" },
    createAt: 	"03/01/2021",
  },

  {
    id: 1,
    idter: 1,
    firstName: "Jean Marc",
    lastName: "Duvers",
    tel: "8093099342",
    documentNumber: "3333333",
    profile: { id: 0, description: "Admin" },
    docType: { id: 0, description: "Passport" },
    status: { id: 0, description: "Actif" },
    createAt: 	"04/01/2021",
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
  createAt: string ;
}
