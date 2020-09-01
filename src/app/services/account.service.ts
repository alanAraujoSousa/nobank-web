import { Injectable } from '@angular/core';
import { Globals } from 'src/app/globals';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private _globals: Globals) { 

  }

  getBalance(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this._globals.endpoints.account.balance + '/' + id, { observe: 'response' });
  }
  
  withdraw(id: string, dto: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this._globals.endpoints.account.withdraw.replace("_id", id), dto, { observe: 'response' });
  }

  deposit(id: string, dto: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this._globals.endpoints.account.deposit.replace("_id", id), dto, { observe: 'response' });
  }
}
