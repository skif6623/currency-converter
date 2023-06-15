import { Pipe, PipeTransform } from '@angular/core';
import { IIdea } from 'src/models/ideas';

@Pipe({
  name: 'filterIdeas',
})
export class FilterIdeasPipe implements PipeTransform {
  transform(ideas: IIdea[], search: string): IIdea[] {
    return ideas.filter((i) =>
      i.activity.toLowerCase().includes(search.toLowerCase())
    );
  }
}
