import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPrices().subscribe(res => {
      this.cryptos = res;
    });
  }

} // class
