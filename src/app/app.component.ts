import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from './servise/current-rate.service';
import { Observable, tap } from 'rxjs';
import { IHeaderRate } from './models/header-rate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  latestRate: IHeaderRate = { EUR: 0, USD: 0 };
  constructor(private currentRate: CurrentRateService) {}

  ngOnInit(): void {
    // this.currentRate.getRates().subscribe((rate) => {
    //   const receivedRate = {
    //     USD: rate[0].conversion_rate,
    //     EUR: rate[1].conversion_rate,
    //   };
    //   this.latestRate = receivedRate;
    // });
  }
}
