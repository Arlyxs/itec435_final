import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe }from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CritiquesComponent } from './critiques/critiques.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { SortByDatePipe } from './sort-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CritiquesComponent,
    MoviesDetailComponent,
    FilterPipe,
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
