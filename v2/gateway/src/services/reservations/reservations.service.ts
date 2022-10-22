import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationsService {
  constructor() {}

  public getReservation() {
    return 'getReservation';
  }

  public createReservation() {
    return 'createReservation';
  }

  public updateReservation() {
    return 'updateReservation';
  }
}
