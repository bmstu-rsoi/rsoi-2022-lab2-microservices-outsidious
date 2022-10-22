import { Injectable } from '@nestjs/common';

@Injectable()
export class LoyaltyService {
  constructor() {}

  public getLoyalty() {
    return 'getLoyalty';
  }

  public createLoyalty() {
    return 'createLoyalty';
  }

  public updateLoyalty() {
    return 'updateLoyalty';
  }
}
