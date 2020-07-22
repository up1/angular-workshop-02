import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceTarget',
})
export class SpaceTargetPipe implements PipeTransform {
  transform(value: string, seperator = '-'): string {
    return value.replace(/\s/g, seperator);
  }
}
