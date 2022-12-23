import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSum'
})
export class GetSumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
