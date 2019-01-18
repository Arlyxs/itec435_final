import { Pipe, PipeTransform } from '@angular/core';
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

/* code snippet elements credit due to  https://stackoverflow.com/questions/47017194/how-to-filter-based-on-property-value-in-an-array-of-objects-in-angular2 */

