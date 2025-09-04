import { Pipe, type PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseImageUrl = environment.baseImageUrl;
@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (typeof value === 'string') return `${baseImageUrl}/${value}`;
    const image = value[0];
    if (!image) return './assets/images/no-image.jpg';
    return `${baseImageUrl}/${image}`;
  }
}
