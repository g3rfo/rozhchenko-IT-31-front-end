import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientsList'
})
export class IngredientsListPipe implements PipeTransform {

  transform(items: string[], limit: number = 4) {
    if (!items) return { visible: [], restCount: 0 };

    const visible = items.slice(0, limit);
    const restCount = Math.max(items.length - limit, 0);

    return { visible, restCount };
  }
}
