import { Component, Input } from '@angular/core';
import { IHeaderRate } from 'src/app/models/header-rate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() latestRate: IHeaderRate;
}
