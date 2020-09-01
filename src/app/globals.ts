import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Globals {

    api = environment.baseUrl;

    endpoints = {
		account: {
			balance: this.api + '/v1/account/_id',
            deposit: this.api + '/v1/account/_id/deposit',
            withdraw: this.api + '/v1/account/_id/withdraw',
        }
    }
}