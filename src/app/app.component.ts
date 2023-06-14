import { Component, OnInit } from '@angular/core';
import { IIdea } from 'src/models/ideas';
import { IdeasService } from './services/ideas.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Знайомство з Angular';
  // ideas: IIdea[] = [];
  loading = false;
  ideas$: Observable<IIdea[]>;

  constructor(private IdeasService: IdeasService) {}

  ngOnInit(): void {
    this.loading = true;
    this.ideas$ = this.IdeasService.getAll().pipe(
      tap(() => (this.loading = false))
    );
    // this.ideasServise.getAll().subscribe((ideas) => {
    //   this.ideas = ideas;
    //   this.loading = false;
    // });
  }
}
