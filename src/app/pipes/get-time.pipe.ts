import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTime'
})
export class GetTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
