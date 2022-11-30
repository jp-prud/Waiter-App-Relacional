export interface IOrder {
  table: number;
  status?: IStatus;
  products: [{ product: string; quantity: number }];
}

export enum IStatus {
  'WAITING',
  'IN_PRODUCTION',
  'DONE',
}

export interface IUpdateRequestInput {
  orderId: string;
  status: IStatus;
}
