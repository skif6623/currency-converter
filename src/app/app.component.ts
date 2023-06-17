import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from './servise/current-rate.service';
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
    this.currentRate.getRates().subscribe((res) => {
      const receivedRate = {
        USD: res[0].result,
        EUR: res[1].result,
      };
      this.latestRate = receivedRate;
    });
  }
}
