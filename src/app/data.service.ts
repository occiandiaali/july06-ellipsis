import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operators/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;

  constructor(private httpClient: HttpClient) { }

  getPrices() {
    return this.httpClient.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNT,LTC,BIX,CNX,BMX,XRP&tsyms=USD,EUR,NGN&api_key=606bde47352bb792155c930f3256de3ba33105cc4392794f28ecb67c43fc1dd6');
  }
} // class
