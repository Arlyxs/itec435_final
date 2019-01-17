import { Pipe, PipeTransform } from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';
@Pipe({
  name: 'filterByMovie'
})

/* return a subset of an array of movItems, (movie items) if any item contains the searchText string. */
export class FilterPipe implements PipeTransform {
  transform( movieList : any, moviename: string): any[] {
        if(movieList) {
            return movieList.filter((listing: any) => listing.movie_name === moviename);
        }
    }
}

/* code snippet credit due to  https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c */