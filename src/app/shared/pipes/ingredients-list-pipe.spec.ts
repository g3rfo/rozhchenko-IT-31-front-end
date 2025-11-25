import { IngredientsListPipe } from './ingredients-list-pipe';

describe('IngredientsListPipe', () => {
  let pipe: IngredientsListPipe;

  beforeEach(() => {
    pipe = new IngredientsListPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return first 4 items by default and correct restCount', () => {
    const items = ['a', 'b', 'c', 'd', 'e', 'f'];
    const result = pipe.transform(items);

    expect(result.visible).toEqual(['a', 'b', 'c', 'd']);
    expect(result.restCount).toBe(2);
  });

  it('should return all items if length <= limit', () => {
    const items = ['a', 'b', 'c'];
    const result = pipe.transform(items);

    expect(result.visible).toEqual(['a', 'b', 'c']);
    expect(result.restCount).toBe(0);
  });

  it('should respect custom limit', () => {
    const items = ['a', 'b', 'c', 'd', 'e'];
    const result = pipe.transform(items, 2);

    expect(result.visible).toEqual(['a', 'b']);
    expect(result.restCount).toBe(3);
  });

  it('should return empty visible array and restCount 0 if items is null', () => {
    const result = pipe.transform(null as unknown as string[]);
    expect(result.visible).toEqual([]);
    expect(result.restCount).toBe(0);
  });
});
