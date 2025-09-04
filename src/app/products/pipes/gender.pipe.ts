import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appGender',
})
export class GenderPipe implements PipeTransform {
  private readonly genderMap: Record<string, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
  };

  transform(value: string): string {
    return this.genderMap[value] || '';
  }
}
