import { Injectable } from '@nestjs/common';

import { delay, of } from 'rxjs';

@Injectable()
export class FakeService {
    request(response: any, delyTime = 3000) {
        return of(response).pipe(delay(delyTime));
    }
}