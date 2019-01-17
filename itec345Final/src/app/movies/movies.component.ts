import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { MOVIES } from '../movie-list';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  /* movie: Movie = {
    imageUrl: '/assets/posters/black_panther.jpeg',
    name: 'Black Pather',
    genre: 'Fantasy',
    releaseDate: '2018-01-29',
    rating: 'pg-13',
    userScore: 6.6,
    metaScore: 88,
    length: 134,
    // tslint:disable-next-line:max-line-length
    description: 'After the events of Captain America: Civil War, King TíChalla returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his countryís new leader. However, TíChalla soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakanadan special forces, to prevent Wakanda from being dragged into a world war',
  }; */

  movies = MOVIES;
  selectedMovie: Movie;


  constructor() { }

  ngOnInit() {
  }

  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
  }

}
