import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { IIdea } from 'src/models/ideas';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<IIdea[]> {
    return this.http
      .get<IIdea[]>('https://644d6936cfdddac970a41176.mockapi.io/ideas', {
        // params: new HttpParams().append('page', 1).append('limit', 5),
        params: new HttpParams({
          fromObject: { page: 1, limit: 3 },
        }),
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
