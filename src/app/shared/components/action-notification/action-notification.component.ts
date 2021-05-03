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
            this.notificationState.iconColor = '#ff0000cf';
            this.notificationState.bg = '#ff0000cf';
          }
          break;
        case 'success':
          {
            this.notificationState.message = aN.message;
            this.notificationState.iconColor = '#017307b5';
            this.notificationState.icon = 'check_circle';
            this.notificationState.bg = '#017307b5';
          }
          break;
        case 'warning':
          {
           this.notificationState.message = aN.message;
            this.notificationState.icon = 'error';
            this.notificationState.iconColor = '#f37803b8';
            this.notificationState.bg = '#f37803b8';
          }
          break;
        case 'message':
          {
            this.notificationState.message = aN.message;
            this.notificationState.icon = 'message';
            this.notificationState.iconColor = '#272727b5';
            this.notificationState.bg = '#272727b5';
          }
          break;
        case 'info':
          {
            this.notificationState.message = aN.message;
            this.notificationState.icon = 'info';
            this.notificationState.iconColor = '#';
            this.notificationState.bg = '#007eff';
          }
          break;
        case 'default':
          {
            this.notificationState.message = '';
            this.notificationState.icon = 'remove';
            this.notificationState.iconColor = '#ffffff00';
            this.notificationState.bg = '#ffffff00';
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