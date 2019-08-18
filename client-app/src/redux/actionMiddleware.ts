import { Action, ErrorAction, PendingAction } from "./actionTypes";
import { NotificationType, SuccessNotificationAction } from "./notifications";

export const actionMiddleware = ({ dispatch }: any) => (next: any) => (
  action: any
) => {
  if (action instanceof Action) {
    if (action instanceof PendingAction) {
      dispatch({ type: NotificationType.RESET });
    } else if (action instanceof SuccessNotificationAction) {
      dispatch({ ...action, type: NotificationType.SUCCESS });
    } else if (action instanceof ErrorAction) {
      dispatch({ ...action, type: NotificationType.ERROR });
    }
    return next({ ...action });
  }
  return next(action);
};
