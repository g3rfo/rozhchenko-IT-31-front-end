import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundMessage } from './not-found-message';

describe('NotFoundMessage', () => {
  let component: NotFoundMessage;
  let fixture: ComponentFixture<NotFoundMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
