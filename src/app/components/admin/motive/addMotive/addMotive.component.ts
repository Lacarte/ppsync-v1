import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MotiveRepositoryService } from "./../repository/motive-repository.service";
import { AfterViewInit, Component, Inject, OnInit } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { STATES } from "src/app/core/enums/states.enum";

@Component({
  selector: "app-addMotive",
  templateUrl: "./addMotive.component.html",
  styleUrls: ["./addMotive.component.css"],
})
export class AddMotiveComponent implements OnInit, AfterViewInit {
  title = "ENREGISTRER UN MOTIF";
  states = STATES;
  id = 0;
  public statekeys = Object.keys(this.states);

  actionNotification = {
    isVisible: false,
    messageType: "success",
    message: "Savegardé avec succès.",
  };
  isRefresh: boolean;

  public formGroup: FormGroup = this.fb.group({
    description: ["", [Validators.required]],
    state: [this.statekeys[0], Validators.required],
  });

  stateCtrl = this.formGroup.get("state");
  isOneTimeSaving: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddMotiveComponent>,
    public motiveRepositoryService: MotiveRepositoryService,
    private fb: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    //this.stateCtrl.setValue();
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
        this.motiveRepositoryService.saveMotive(this.formGroup.value).subscribe(
          (res) => {
            this.onSuccess();
          },
          (error) => {
            this.onError(error);
          }
        );
      } else {
        //Update
        this.motiveRepositoryService
          .updateMotive(this.formGroup.value, this.data?.id)
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
