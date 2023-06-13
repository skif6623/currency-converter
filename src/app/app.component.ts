import { Component } from '@angular/core';
import { IIdea } from 'src/models/ideas';
import { ideas as data } from 'src/data/ideas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Знайомство з Angular';
  ideas: IIdea[] = data;
}
