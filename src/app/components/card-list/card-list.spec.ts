import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardList } from './card-list';
import { BehaviorSubject } from 'rxjs';
import { DishCard } from '../../shared/models/dish-card';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Card } from '../card/card';
import { NotFoundMessage } from '../not-found-message/not-found-message';
import { IngredientsListPipe } from '../../shared/pipes/ingredients-list-pipe';
import { ScaleOnHover } from '../../shared/directives/scale-on-hover';
import { Data } from '../../services/data/data';

describe('CardList', () => {
  let component: CardList;
  let fixture: ComponentFixture<CardList>;
  let mockDataService: Partial<Data>;
  let itemsSubject: BehaviorSubject<DishCard[]>;

  const mockDishes: DishCard[] = [
    {
      id: 'dish-one',
      title: 'Dish One',
      imgUrl: 'img1.png',
      description: 'Description 1',
      cookingTime: 20,
      complexity: 'Easy',
      servingFor: 2,
      ingredients: ['ing1', 'ing2', 'ing3', 'ing4', 'ing5'],
      recipe: 'recipe 1'
    },
    {
      id: 'dish-two',
      title: 'Dish Two',
      imgUrl: 'img2.png',
      description: 'Description 2',
      cookingTime: 40,
      complexity: 'Medium',
      servingFor: 4,
      ingredients: ['ingA', 'ingB', 'ingC'],
      recipe: 'recipe 2'
    }
  ];

  beforeEach(async () => {
    itemsSubject = new BehaviorSubject<DishCard[]>([]);

    mockDataService = {
      items$: itemsSubject.asObservable()
    };

  await TestBed.configureTestingModule({
    imports: [
      CardList,
      Card,
      NotFoundMessage,
      IngredientsListPipe,
      ScaleOnHover,
      RouterTestingModule
    ],
    providers: [
      { provide: Data, useValue: mockDataService }
    ]
  }).compileComponents();

    fixture = TestBed.createComponent(CardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CardList component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a Card for each DishCard emitted by Data service', () => {
    itemsSubject.next(mockDishes);
    fixture.detectChanges();

    const cardEls = fixture.nativeElement.querySelectorAll('app-card');
    expect(cardEls.length).toBe(mockDishes.length);

    const firstCardTitle = cardEls[0].querySelector('.title').textContent;
    expect(firstCardTitle).toContain(mockDishes[0].title);
  });

  it('should display NotFoundMessage if no dishes', () => {
    itemsSubject.next([]);
    fixture.detectChanges();

    const notFoundEl = fixture.nativeElement.querySelector('app-not-found-message');
    expect(notFoundEl).toBeTruthy();
  });
});
