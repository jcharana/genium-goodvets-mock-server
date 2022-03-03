import { Controller, Get, Query } from '@nestjs/common';

import { FakeService } from '../services/fake.service';
import { AnimalListService } from '../mock/animal-list.service';
import { AppointmentListService } from '../mock/appointment-list';
import { AppointmentTypeListService } from '../mock/appointment-type-list';
import { ConsulListService } from '../mock/consult-list.service';
import { InvoicesService } from '../mock/invoices.service';
import { PaymentsService } from '../mock/payments.services';
import { PrescriptionService } from '../mock/prescription.service';
import { BreedService } from '../mock/breed.service';

@Controller('v1')
export class AppController {
  constructor(
    private readonly fakeService: FakeService,
    private readonly animalListService: AnimalListService,
    private readonly appointmentListServie: AppointmentListService,
    private readonly appointmentTypeListService: AppointmentTypeListService,
    private readonly consultListService: ConsulListService,
    private readonly invoiceService: InvoicesService,
    private readonly paymentsService: PaymentsService,
    private readonly prescriptionService: PrescriptionService,
    private readonly breedService: BreedService
  ) {}

  @Get('animal')
  getAnimalList() {
    return this.fakeService.request(this.animalListService.success());
  }

  @Get('appointment')
  getAppointmentList() {
    return this.fakeService.request(this.appointmentListServie.success());
  }

  @Get('appointmenttype')
  getAppointmentTypeList() {
    return this.fakeService.request(this.appointmentTypeListService.success());
  }

  @Get('consult')
  getConsultList(@Query('animal_id') animalId) {
    return this.fakeService.request(this.consultListService.success(animalId));
  }

  @Get('invoice')
  getInvoiceList(@Query('animal_id') animalId) {
    return this.fakeService.request(this.invoiceService.success(animalId));
  }

  @Get('payment')
  getPaymentList(@Query('limit') limit) {
    return this.fakeService.request(this.paymentsService.success(limit));
  }

  @Get('prescription')
  getPrescriptions(@Query('animal_id') animalId) {
    return this.fakeService.request(this.prescriptionService.fetch(animalId));
  }

  @Get('breed')
  getBreeds() {
    return this.fakeService.request(this.breedService.success());
  }
}
