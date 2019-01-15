import { Component, OnInit } from '@angular/core';
import {MOVIES} from '../movie-list';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie = '300 Rise of Empire';

  constructor() { }

  ngOnInit() {
  }

}
