import { Controller, Post } from '@nestjs/common';

import { TokenService } from '../mock/token.service';
import { FakeService } from '../services/fake.service';

@Controller('v1/oauth')
export class TokenController {

    constructor(
        private readonly fakeService: FakeService,
        private readonly tokenService: TokenService
    ) {}

    @Post('access_token')
    getToken() {
        return this.fakeService.request(this.tokenService.getAccessToken());
    }
}