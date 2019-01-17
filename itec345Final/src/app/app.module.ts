import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CritiquesComponent } from './critiques/critiques.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CritiquesComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
