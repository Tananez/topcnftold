import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getVars'
})
export class GetVarsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
