import { Component, Input, OnInit } from '@angular/core';
import { ActionNotification } from '../../interfaces/action-notification';

@Component({
  selector: 'app-action-notification',
  templateUrl: './action-notification.component.html',
  styleUrls: ['./action-notification.component.css']
})
export class ActionNotificationComponent implements OnInit {

  ngOnInit(): void {}

  constructor() {}

  notificationState = {
    isVisible: false,
    message: 'default',
    icon: 'error',
    iconColor: '#ffc300',
    bg: '#fcf1cd',
  };

  @Input()
  set actionNotification(aN: ActionNotification) {
      console.log('notificationData is empty => ', aN);
    if (this.isObjEmpty(aN)) {
      console.log('notificationData is empty => ', aN);
    } else {
      this.notificationState.isVisible = aN.isVisible;
      //console.log('notificationData => ', notificationData);
      switch (aN.messageType) {
        case 'error':
          {
            this.notificationState.message = aN.message;
            this.notificationState.icon = 'error';
            this.notificationState.iconColor = '#f44336';
            this.notificationState.bg = '#ffe6e6';
          }
          break;
        case 'success':
          {
            this.notificationState.message = aN.message;
            this.notificationState.iconColor = '#498233';
            this.notificationState.icon = 'check_circle';
            this.notificationState.bg = '#cdfcdf';
          }
          break;
        case 'warning':
          {
           this.notificationState.message = aN.message;
            this.notificationState.icon = 'error';
            this.notificationState.iconColor = '#ffc300';
            this.notificationState.bg = '#fbf4de';
          }
          break;
        case 'message':
          {
            this.notificationState.message = aN.message;
            this.notificationState.icon = 'message';
            this.notificationState.iconColor = '#007eff';
            this.notificationState.bg = '#efefef';
          }
          break;
        case 'info':
          {
            this.notificationState.message = aN.message;
            this.notificationState.icon = 'info';
            this.notificationState.iconColor = '#007eff';
            this.notificationState.bg = '#efefef';
          }
          break;
        default:
          {
            this.notificationState.message = 'unknown messagetype';
            this.notificationState.icon = 'error';
            this.notificationState.iconColor = '#ffc300';
            this.notificationState.bg = '#fcf1cd';
            console.error("unknown messagetype");
          }
          break;
      }

    }
  }

  isObjEmpty(obj) {
    if (!obj) {
      return true;
    }

    return Object.keys(obj).length === 0;
  }

 hide(){
   this.notificationState.isVisible = false;
 }
}