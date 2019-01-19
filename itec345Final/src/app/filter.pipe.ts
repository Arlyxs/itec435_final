import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'filterByMovie'
})

/* return a subset of an array of movItems, (movie items) if any item contains the searchText string. */
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.name.startsWith(searchText) == true
      //return it;

    });
  }
}

/* code snippet elements credit due to  https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c */



