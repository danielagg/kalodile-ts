export interface IAction<T = any> {
  type: T;
  [key: string]: any;
}

export class Action<T> implements IAction<T> {
  type!: T;
  constructor(...props: any) {
    Object.assign(this, ...props);
  }
}

export class PendingAction<T> extends Action<T> {}

export class SuccessAction<T> extends Action<T> {}

export class ErrorAction<T> extends Action<T> {}
