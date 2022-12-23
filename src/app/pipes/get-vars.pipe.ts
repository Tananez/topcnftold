import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getVars'
})
export class GetVarsPipe implements PipeTransform {

  transform(key: {}): string[] {

    if (!key) {
      return [];
    }

    return Object.values(key);
  }
}
