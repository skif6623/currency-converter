import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { ILatestRate } from '../models/latest-rate';

@Injectable({
  providedIn: 'root',
})
export class CurrentRateService {
  constructor(private http: HttpClient) {}

  getRates(): Observable<ILatestRate[]> {
    const url1 = 'https://api.exchangerate.host/convert?from=USD&to=UAH';
    const url2 = 'https://api.exchangerate.host/convert?from=EUR&to=UAH';

    const request1 = this.http.get<ILatestRate>(url1);
    const request2 = this.http.get<ILatestRate>(url2);

    return forkJoin([request1, request2]);
  }

  getCurrencyRate(from: string, to: string): Observable<ILatestRate[]> {
    const url1 = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
    const url2 = `https://api.exchangerate.host/convert?from=${to}&to=${from}`;

    const request1 = this.http.get<ILatestRate>(url1);
    const request2 = this.http.get<ILatestRate>(url2);

    return forkJoin([request1, request2]);
  }
}
