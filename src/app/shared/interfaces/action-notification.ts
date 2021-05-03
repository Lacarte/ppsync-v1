export interface ActionNotification {
  isVisible: boolean;
  messageType:    "info" | "message" | "warning" | "success" | "error" | "default";
  message: string;
}
