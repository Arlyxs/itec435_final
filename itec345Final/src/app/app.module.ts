import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CritiquesComponent } from './critiques/critiques.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CritiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MoviesComponent,
    CritiquesComponent
  ]
})
export class AppModule { }
