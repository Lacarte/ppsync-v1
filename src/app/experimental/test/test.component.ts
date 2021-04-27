import {
  LogService,
  LogEntry,
  LogLevel,
} from "../../shared/services/log-publishers/log.service";
import { Component, OnInit } from "@angular/core";
import { LogLocalStorage } from "src/app/shared/services/log-publishers/log-publishers";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  logEntries: LogEntry[];
  title = "test";

  constructor(private logger: LogService) {}
  actionNotification = {
    isVisible: false,
    messageType: "success",
    message: "Savegardé avec succès.",
  };

  ngOnInit() {}

  onClickCancel() {}

  clearLog(): void {
    this.logger.clear();
  }

  getLocalStorage(): void {
    let tmp = this.logger.publishers.find(
      (p) => p.constructor.name === "LogLocalStorage"
    );
    
    if (tmp != null) {
      let local = tmp as LogLocalStorage;
      local.getAll().subscribe((response) => (this.logEntries = response));
    }
  }

  objectLog(): void {
    let product = {
      productId: 1,
      productName: "A new product",
      introductionDate: new Date(),
      price: 10,
      url: "www.fairwaytech.com",
    };

    this.logger.log("This is a product object", product);

  }

  testLog(): void {
    //this.logger.level = LogLevel.Off;

    this.logger.log("Test the log() Method", "Paul", "John", 2, 3);
  }
}
