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

  calcToInputValue() {
    if (this.fromInputValue === null) {
      this.fromInputValue = 0;
      this.toInputValue = 0;
      return;
    }
    this.toInputValue = this.fromInputValue * this.calcToCurrency;
  }

  calcFromInputValue() {
    if (this.fromInputValue === null) {
      this.fromInputValue = 0;
      this.toInputValue = 0;
      return;
    }
    this.fromInputValue = this.toInputValue * this.calcFromCurrency;
  }

  setfromCurrency(currencyType: string) {
    this.fromSelectorValue = currencyType;
    this.currentRate
      .getCurrencyRate(this.fromSelectorValue, this.toSelectorValue)
      .subscribe((res) => {
        this.calcToCurrency = res[0].result;
        this.calcFromCurrency = res[1].result;
        if (this.currentField === 'from') {
          this.calcToInputValue();
        }
        if (this.currentField === 'to') {
          this.calcFromInputValue();
        }
      });
  }

  setToCurrency(currencyType: string) {
    this.toSelectorValue = currencyType;
    this.currentRate
      .getCurrencyRate(this.fromSelectorValue, this.toSelectorValue)
      .subscribe((res) => {
        this.calcToCurrency = res[0].result;
        this.calcFromCurrency = res[1].result;
        if (this.currentField === 'to') {
          this.calcFromInputValue();
        }
        if (this.currentField === 'from') {
          this.calcToInputValue();
        }
        this.calcToInputValue();
      });
  }

  setCurrentField(focusedInput: string) {
    this.currentField = focusedInput;
    console.log(this.currentField);
  }
}
