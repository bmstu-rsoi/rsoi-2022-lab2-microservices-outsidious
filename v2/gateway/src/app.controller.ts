import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoyaltyService } from './services/loyalty/loyalty.service';
import { PaymentService } from './services/payment/payment.service';
import { ReservationsService } from './services/reservations/reservations.service';

@Controller('api/v1')
export class AppController {
  constructor(
    private loaltyService: LoyaltyService,
    private paymentService: PaymentService,
    private reservationService: ReservationsService,
  ) {}

  @Get('/reservations')
  getReservations() {
    return this.reservationService.getReservation();
  }

  @Get('/loyalty')
  getLoyalty() {
    return this.loaltyService.getLoyalty();
  }
}
