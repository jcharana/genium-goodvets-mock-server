import { Injectable } from "@nestjs/common";

@Injectable()
export class AppointmentListService {
    private base = {
        meta: {
          timestamp: "1646261986",
          items_page: "1",
          items_page_total: "0",
          items_page_size: "1",
          items_total: "0",
          transaction_id: "12f320c46a5357b4d6fd25bb4195278b99b4c51284d3b691580a2d462d99b55d"
        },
        items: [],
        messages: []
    };

    success() {
        return this.base;
    }
}