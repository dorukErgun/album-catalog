import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewCount'
})
export class ViewCountPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 0) {
      return '1';
    }

    if (value >= 1000000000000) {
      return '1B+';
    }
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(1) + 'B';
    }
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }
  
}
