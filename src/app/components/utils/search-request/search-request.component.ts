import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-search-request",
  templateUrl: "./search-request.component.html",
  styleUrls: ["./search-request.component.scss"],
})
export class SearchRequestComponent implements OnInit {
  title = "EFFECTUER UNE RECHERCHE";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SearchRequestComponent>
  ) {}

  ngOnInit() {}

  onClickCancel(): void {
    this.dialogRef.close({ isRefresh: false });
  }
}
