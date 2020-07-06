import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cryptos',
  templateUrl: 'cryptos.page.html',
  styleUrls: ['cryptos.page.scss']
})
export class CryptosPage implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPrices().subscribe(res => {
      this.cryptos = res;
    });
  }

} // class
