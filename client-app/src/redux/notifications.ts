import { SuccessAction } from "./actionTypes";

export enum NotificationType {
  RESET = "RESET",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS"
}

export class SuccessNotificationAction<T> extends SuccessAction<T> {}
