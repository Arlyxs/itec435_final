import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './movie-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  constructor() { }
}
