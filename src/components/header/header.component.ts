import { Component, Input } from '@angular/core';
import { IIdea } from 'src/models/ideas';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() ideas: IIdea;

  description = false;
}
