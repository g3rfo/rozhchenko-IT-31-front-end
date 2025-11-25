import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';
import { DishCard } from '../../shared/models/dish-card';
import { RouterTestingModule } from '@angular/router/testing';

describe('DishCard', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  const mockItem: DishCard = {
    id: "test-dish",
    title: "Test Dish",
    imgUrl: "img/test.png",
    description: "Test description",
    cookingTime: 25,
    complexity: "Medium",
    servingFor: 3,
    ingredients: ["ing1", "ing2", "ing3", "ing4", "ing5"],
    recipe: "recipe text"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;

    component.item = mockItem;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item title', () => {
    const titleEl: HTMLElement = fixture.nativeElement.querySelector('.title');
    expect(titleEl.textContent).toContain(mockItem.title);
  });

  it('should display item description', () => {
    const descEl: HTMLElement = fixture.nativeElement.querySelector('.description');
    expect(descEl.textContent).toContain(mockItem.description);
  });

  it('should display cooking time', () => {
    const timeEl: HTMLElement = fixture.nativeElement.querySelector('.stats-item:nth-child(1) .stats-title');
    expect(timeEl.textContent).toContain(`${mockItem.cookingTime} mins`);
  });

  it('should display complexity', () => {
    const complexityEl: HTMLElement = fixture.nativeElement.querySelector('.stats-item:nth-child(2) .stats-title');
    expect(complexityEl.textContent).toContain(mockItem.complexity);
  });

  it('should display serving count', () => {
    const servingEl: HTMLElement = fixture.nativeElement.querySelector('.stats-item:nth-child(3) .stats-title');
    expect(servingEl.textContent).toContain(`${mockItem.servingFor} servings`);
  });

  it('should set correct image src and alt', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('.card-image img');
    expect(img.src).toContain(mockItem.imgUrl);
    expect(img.alt).toBe(mockItem.title + ' image');
  });

  it('should render visible ingredients', () => {
    const ingredientsEls = fixture.nativeElement.querySelectorAll('.ingredient');
    expect(ingredientsEls.length).toBeGreaterThan(0);
    expect(ingredientsEls[0].textContent).toContain('ing1');
  });

  it('should show "+ more" indicator when there are hidden ingredients', () => {
    const moreEl: HTMLElement = fixture.nativeElement.querySelector('.leftIngredients');
    expect(moreEl).toBeTruthy();
    expect(moreEl.textContent).toContain('+1 more');
  });
});
