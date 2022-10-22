import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoyaltyService } from './services/loyalty/loyalty.service';
import { PaymentService } from './services/payment/payment.service';
import { ReservationsService } from './services/reservations/reservations.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LoyaltyService, PaymentService, ReservationsService],
})
export class AppModule {}
