import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
@Injectable()
export class SortByDatePipe implements PipeTransform {

  transform(array: Array<any>, args: string): Array<any> {
    if (typeof args[0] === "undefined") {
        return array;
    }
    let direction = args[0][0];
    let column = args.replace('-','');
    array.sort((a: any, b: any) => {
        let left = Number(new Date(a[column]));
        let right = Number(new Date(b[column]));
        return (direction === "-") ? right - left : left - right;
    });
    return array;
}
}

/* code snippet credit to https://stackoverflow.com/questions/35158817/angular-2-orderby-pipe   */