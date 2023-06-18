import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from 'src/app/servise/current-rate.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  fromSelectorValue: string = 'USD';
  toSelectorValue: string = 'UAH';

  fromInputValue: number;
  toInputValue: number;

  calcFromCurrency: number;
  calcToCurrency: number;

  currentField: string;

  constructor(private currentRate: CurrentRateService) {}

  ngOnInit(): void {
    this.currentRate
      .getCurrencyRate(this.fromSelectorValue, this.toSelectorValue)
      .subscribe((res) => {
        this.calcToCurrency = res[0].result;
        this.calcFromCurrency = res[1].result;
      });
  }

  calcInputValue() {
    if (this.fromInputValue === null) {
      this.resetInputs();
      return;
    }
    if (this.currentField === 'from') {
      this.toInputValue = this.fromInputValue * this.calcToCurrency;
    } else {
      this.fromInputValue = this.toInputValue * this.calcFromCurrency;
    }
  }

  setfromCurrency(currencyType: string) {
    this.fromSelectorValue = currencyType;
    this.refreshSelect();
  }

  setToCurrency(currencyType: string) {
    this.toSelectorValue = currencyType;
    this.refreshSelect();
  }

  setCurrentField(focusedInput: string) {
    this.currentField = focusedInput;
  }

  refreshSelect() {
    this.currentRate
      .getCurrencyRate(this.fromSelectorValue, this.toSelectorValue)
      .subscribe((res) => {
        this.calcToCurrency = res[0].result;
        this.calcFromCurrency = res[1].result;
        this.currentField === 'from'
          ? this.calcInputValue()
          : this.calcInputValue();
      });
  }

  resetInputs() {
    this.fromInputValue = 0;
    this.toInputValue = 0;
  }
}
