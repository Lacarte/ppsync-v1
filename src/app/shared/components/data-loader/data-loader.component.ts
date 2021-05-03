import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
@Component({
  selector: "app-data-loader",
  templateUrl: "./data-loader.component.html",
  styleUrls: ["./data-loader.component.css"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ height: 0, opacity: 0 }),
        animate("1s ease-out", style({ height: 300, opacity: 1 })),
      ]),
      transition(":leave", [
        style({ height: 300, opacity: 1 }),
        animate("1s ease-in", style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class DataLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
