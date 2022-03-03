import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { TokenController } from './controllers/token.controller';
import { AnimalListService } from './mock/animal-list.service';
import { AppService } from './mock/app.service';
import { AppointmentListService } from './mock/appointment-list';
import { AppointmentTypeListService } from './mock/appointment-type-list';
import { BreedService } from './mock/breed.service';
import { ConsulListService } from './mock/consult-list.service';
import { InvoicesService } from './mock/invoices.service';
import { PaymentsService } from './mock/payments.services';
import { PrescriptionService } from './mock/prescription.service';
import { TokenService } from './mock/token.service';
import { FakeService } from './services/fake.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    TokenController
  ],
  providers: [
    AppService,
    FakeService,
    TokenService,
    AnimalListService,
    AppointmentListService,
    AppointmentTypeListService,
    ConsulListService,
    InvoicesService,
    PaymentsService,
    PrescriptionService,
    BreedService
  ],
})
export class AppModule {}
