import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RequestStatusRepositoryService } from "../repository/request-status-repository.service";
import { STATES } from "src/app/core/enums/states.enum";

@Component({
  selector: "app-addRequest-status",
  templateUrl: "./addRequest-status.component.html",
  styleUrls: ["./addRequest-status.component.css"],
})
export class AddRequestStatusComponent implements OnInit {
  title = "ENREGISTRER ETAT DE REQUÊTE";
  states = STATES;
  id = 0;
  public statekeys = Object.keys(this.states);
  isRefresh: boolean;

  actionNotification = {
    isVisible: false,
    messageType: "success",
    message: "Savegardé avec succès.",
  };

  public formGroup: FormGroup = this.fb.group({
    description: ["", [Validators.required]],
    state: [this.statekeys[0], Validators.required],
  });

  stateCtrl = this.formGroup.get("state");
  descriptionCtrl = this.formGroup.get("description");
  isOneTimeSaving: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddRequestStatusComponent>,
    public requestStatusRepositoryService: RequestStatusRepositoryService,
    private fb: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    if (this.data) {
      this.stateCtrl.setValue(this.data?.state);
      this.descriptionCtrl.setValue(this.data?.description);
    }
  }

  ngOnInit() {
    this.dialogRef.keydownEvents().subscribe((event) => {
      if (event.key === "Escape") {
        this.onClickCancel();
      }
    });
  }

  onClickSave() {
    this.isRefresh = false;
    this.isOneTimeSaving = true;
    if (this.formGroup.valid) {
      if (!this.data) {
        //Save
        this.requestStatusRepositoryService
          .save(this.formGroup.value)
          .subscribe(
            (res) => {
              this.onSuccess();
            },
            (error) => {
              this.onError(error);
            }
          );
      } else {
        //Update
        this.requestStatusRepositoryService
          .update(this.formGroup.value, this.data?.id)
          .subscribe(
            (res) => {
              this.onSuccess();
            },
            (error) => {
              this.onError(error);
            }
          );
      }
    }
  }

  private onSuccess() {
    this.isRefresh = true;
    this.dialogRef.close({ isRefresh: this.isRefresh });
  }

  private onError(error: any) {
    console.error(error);
    this.isOneTimeSaving = false;
    this.actionNotification = {
      isVisible: true,
      messageType: "error",
      message: `${error.errorMessage}`,
    };
  }

  logThrottledClick() {
    console.log("logThrottledClick");
  }
  onClickCancel(): void {
    this.dialogRef.close({ isRefresh: false });
  }
}
