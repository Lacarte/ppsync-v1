import { DoctypeRepositoryService } from './../repository/doctype-repository.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { STATES } from "src/app/core/enums/states.enum";
import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-addDocument',
  templateUrl: './addDocument.component.html',
  styleUrls: ['./addDocument.component.css']
})
export class AddDocumentComponent implements OnInit,AfterViewInit {

  title= "ENREGISTRER TYPE DOCUMENT";
  states = STATES;
  id = 0;
  public statekeys = Object.keys(this.states);
  isRefresh: boolean;

  actionNotification = {
  isVisible: false,
  messageType: 'success',
  message: "Savegardé avec succès."
  }


  public formGroup: UntypedFormGroup = this.fb.group({
    description: ["", [Validators.required]],
    state: [this.statekeys[0], Validators.required],
  });

  stateCtrl = this.formGroup.get("state");
  descriptionCtrl = this.formGroup.get("description");
  isOneTimeSaving: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDocumentComponent>,
    public doctypeRepositoryService: DoctypeRepositoryService,
    private cRef: ChangeDetectorRef,
    private fb: UntypedFormBuilder
  ) {}


  ngAfterViewInit(): void {
    
    if(this.data){
    this.stateCtrl.setValue(this.data?.state);
    this.descriptionCtrl.setValue(this.data?.description);
    }      

    this.cRef.detectChanges();
 
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
        this.doctypeRepositoryService.save(this.formGroup.value).subscribe(
          (res) => {
            this.onSuccess();
          },
          (error) => {
            this.onError(error);
          }
        );
      } else {
        //Update
        this.doctypeRepositoryService
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
