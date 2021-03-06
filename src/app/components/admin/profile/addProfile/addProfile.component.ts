import { ConfirmDialogService } from "./../../../../shared/services/confirm-dialog.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
} from "@angular/forms";
import { AfterViewInit, Component,ChangeDetectorRef, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-addProfile",
  templateUrl: "./addProfile.component.html",
  styleUrls: ["./addProfile.component.css"],
})
export class AddProfileComponent implements OnInit, AfterViewInit {
  title = "ENREGISTRER PROFIL";

  public menuForm: FormGroup = this.fb.group({
    menuFields: this.fb.array([]),
  });

  menuFields: FormArray = new FormArray([]);

  actionNotification = {
    isVisible: false,
    messageType: "success",
    message: "Savegardé avec succès.",
  };

  menus = [
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Tableau de Bord(Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Proceder(Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Enregister(Sous Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Admin(Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Utilisateur(Sous Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Etat de Requête(Sous Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Profil(Sous Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Type de Document(Sous Menu)",
      menuType: { name: "Link", id: 0 },
    },
    {
      id: 0,
      isSelected: true,
      code: "link_dashboard",
      description: "Rapport(Menu)",
      menuType: { name: "Link", id: 0 },
    },

    {
      id: 0,
      isSelected: true,
      code: "btn_add_user",
      description: "Requête(Sous Menu)",
      menuType: { name: "Button", id: 1 },
    },

    {
      id: 0,
      isSelected: true,
      code: "link_user",
      description: "Log(Sous Menu)",
      menuType: { name: "Link", id: 0 },
    },
  ];

  menuTypes = [
    { name: "Link", id: 0 },
    { name: "Button", id: 1 },
    { name: "Block", id: 2 },
    { name: "Menu", id: 3 },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddProfileComponent>,
    private confirmDialogService: ConfirmDialogService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef

  ) {}
  ngAfterViewInit(): void {
    this.menuFields.clear();
    
    
    //Loading menu
    this.menuForm.setControl(
      "menuFields",
      this.setField(this.menus, this.menuFields)
      );
      
      this.menuForm.get("menuFields")["controls"].forEach((control) => {
        control.disable();
      });
      this.cdr.detectChanges();

    setTimeout(() => {
      
      });
  }

  ngOnInit() {
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
          this.onClickCancel();
      }
  });
  }

  createMenu(): FormGroup {
    return this.fb.group({
      id: 0,
      isSelected: [true],
      code: ["", Validators.required],
      description: ["", Validators.required],
      menuType: ["", Validators.required],
    });
  }

  addMenu(): void {
    this.menuFields = this.menuForm.get("menuFields") as FormArray;
    this.menuFields.push(this.createMenu());

    this.menuForm
      .get("menuFields")
      ["controls"].forEach((control: AbstractControl) => {
        if (control.valid) {
          control.disable();
        }
      });
  }

  removeMenuField(i: number) {

    if (this.menuFields.controls[i].disabled) {
      this.confirmDialogService.open({
        title: "Confirmation!",
        message: `Voulez Vous Annuler ce MENU? ${ JSON.stringify(this.menuFields.controls[i].value.description)} - ${ JSON.stringify(this.menuFields.controls[i].value.code)}`,
        cancelText: "Non",
        confirmText: "Accepter",
      });

      this.confirmDialogService.confirmed().subscribe((isOk) => {
        if (isOk) {
          this.menuFields.removeAt(i);
          this.menuFields.controls.forEach((control: AbstractControl) => {
            if (control.valid) {
              control.disable();
            }
          });
        } 
      });
    } else {
      this.menuFields.removeAt(i);
    }
 
  }

  activateMenuField(i: number) {
    //this.menuForm.get("menuFields")["controls"][i].enable();
    this.menuFields.controls[i].enable();
    if (this.menuFields.controls[i].disabled) {
      this.menuFields.controls[i].enable();
    }
  }

  setField(data: any[], formArray: FormArray): FormArray {
    console.log("data", data);
    data.forEach((element) => {
      console.log("element", element);
      formArray.push(this.fb.group(element));
    });

    return formArray;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();

    /*   this.menuFields.filter( it => {
      console.log('abc', it.value.device_id);
      return it.value.device_id.toLowerCase().includes(searchText);
    });
 */

    console.log("", this.menuFields.controls);
  }

  compareFn(o1: any, o2: any) {
    return o1.name === o2.name;
  }

  onClickCancel(): void {
    this.dialogRef.close({ isRefresh: false });
  }
}
