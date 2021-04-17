import { LogLevel } from "./logLevel.enum";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogService {
  level: LogLevel = LogLevel.ALl;
  constructor() {}

  log(msg: any) {
    console.log(new Date() + ":", JSON.stringify(msg));
  }

  shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if (this.level !== LogLevel.Off && level >= this.level) {
      return true;
    }

    return ret;
  }
}
