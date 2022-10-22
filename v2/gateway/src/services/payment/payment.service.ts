import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  constructor() {}

  public getPayment() {
    return 'getPayment';
  }

  public createPayment() {
    return 'createPayment';
  }

  public updatePayment() {
    return 'updatePayment';
  }
}
