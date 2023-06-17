import { Component, OnInit } from '@angular/core';
import { CurrentRateService } from 'src/app/servise/current-rate.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  fromSelectorValue: string = 'USD';
  toSelectorValue: string = 'UAH';

  fromInputValue: number;
  toInputValue: number;

  resultFrom: any;
  resultTo: any;

  constructor(private currentRate: CurrentRateService) {}

  ngOnInit(): void {}
  setfromCurrency(a: string) {
    this.fromSelectorValue = a;
  }

  setToCurrency(a: string) {
    this.toSelectorValue = a;
  }

  calcToInputValue() {
    this.toInputValue = this.fromInputValue * 2;
  }
  calcFromInputValue() {
    this.fromInputValue = this.toInputValue * 2;
  }

  // ngOnInit(): void {
  //   this.currentRate
  //     .getCurrencyRate(this.fromSelectorValue)
  //     .subscribe((res) => {
  //       this.resultFrom = res;
  //       this.fromInputValue = res.conversion_rates.USD;
  //       this.toInputValue = res.conversion_rates.UAH;
  //     });
  //   this.currentRate.getCurrencyRate(this.toSelectorValue).subscribe((res) => {
  //     this.resultTo = res;
  //   });
  // }

  // setfromCurrency(a: string): void {
  //   this.currentRate.getCurrencyRate(a).subscribe((res) => {
  //     this.resultFrom = res;
  //     if (this.fromInputValue === null) {
  //       return;
  //     }
  //     this.toInputValue =
  //       this.resultFrom.conversion_rates[this.toSelectorValue] *
  //       this.fromInputValue;
  //   });
  // }

  // setToCurrency(a: string): void {
  //   this.currentRate.getCurrencyRate(a).subscribe((res) => {
  //     this.resultTo = res;
  //   });
  //   this.toInputValue =
  //     this.resultFrom.conversion_rates[a] * this.fromInputValue;
  //   console.log(this.resultTo);
  // }

  // updateToValue() {
  //   // if (this.fromValue === null) {
  //   //   this.toValue = null;
  //   //   return;
  //   // }
  //   this.toInputValue =
  //     this.fromInputValue *
  //     this.resultFrom.conversion_rates[this.toSelectorValue];
  // }
  // updateFromValue() {
  //   // if (this.toValue === null) {
  //   //   this.fromValue = null;
  //   //   return;
  //   // }
  //   this.fromInputValue =
  //     this.toInputValue *
  //     this.resultTo.conversion_rates[this.fromSelectorValue];
  // }
}

//  setfromCurrency(a: string): void {
//     this.currentRate.getCurrencyRate(a).subscribe((res) => {
//       this.resultFrom = res;
//       if (this.fromValue === null) {
//         return;
//       }
//       this.toValue =
//         this.resultFrom.conversion_rates[this.toCurrency] * this.fromValue;
//     });
//   }

//   setToCurrency(a: string): void {
//     this.currentRate.getCurrencyRate(a).subscribe((res) => {
//       this.resultTo = res;
//     });
//     this.toValue = this.resultFrom.conversion_rates[a] * this.fromValue;
//     console.log(this.resultTo);
//   }

//   updateToValue() {
//     // if (this.fromValue === null) {
//     //   this.toValue = null;
//     //   return;
//     // }
//     this.toValue =
//       this.fromValue * this.resultFrom.conversion_rates[this.toCurrency];
//   }
//   updateFromValue() {
//     // if (this.toValue === null) {
//     //   this.fromValue = null;
//     //   return;
//     // }
//     this.fromValue =
//       this.toValue * this.resultTo.conversion_rates[this.fromCurrency];
//   }
