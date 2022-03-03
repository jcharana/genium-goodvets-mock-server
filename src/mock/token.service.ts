import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
    getAccessToken() {
        return {
            access_token: 'dMYHZxGVQWexaPQwvXmdU5Bv2y8aV0q7NDxt7KTh',
            token_type: 'Bearer',
            expires_in: 1209600
        };
    }
}