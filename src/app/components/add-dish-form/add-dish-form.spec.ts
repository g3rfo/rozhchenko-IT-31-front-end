import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDishForm } from './add-dish-form';

describe('AddDishForm', () => {
  let component: AddDishForm;
  let fixture: ComponentFixture<AddDishForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDishForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDishForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
