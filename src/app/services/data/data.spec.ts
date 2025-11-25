import { TestBed } from '@angular/core/testing';

import { Data } from './data';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DishCard } from '../../shared/models/dish-card';

describe('Data', () => {
  let service: Data;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Data]
    });

    service = TestBed.inject(Data);
    httpMock = TestBed.inject(HttpTestingController);

    const initReq = httpMock.expectOne('dishes');
    initReq.flush([]);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return item by id', () => {
    const mockDish: DishCard = {
      id: "dish-from-authorized-user",
      title: "Dish from authorized user",
      imgUrl: "1",
      description: "description",
      cookingTime: 30,
      complexity: "Medium",
      servingFor: 4,
      ingredients: ["ing1", "ing2", "ing3", "ing4"],
      recipe: "recipe"
    };

    service.getItemById('dish-from-authorized-user').subscribe(item => {
      expect(item).toEqual(mockDish);
    });

    const req = httpMock.expectOne('dishes/dish-from-authorized-user');
    expect(req.request.method).toBe('GET');
    req.flush(mockDish);
  });

  it('should return undefined on error', () => {
    service.getItemById('defunct-id').subscribe(item => {
      expect(item).toBeUndefined();
    });

    const req = httpMock.expectOne('dishes/defunct-id');
    req.error(new ErrorEvent('Network error'));
  });
});
