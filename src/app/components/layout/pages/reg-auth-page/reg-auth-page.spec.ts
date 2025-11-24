import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAuthPage } from './reg-auth-page';

describe('RegAuthPage', () => {
  let component: RegAuthPage;
  let fixture: ComponentFixture<RegAuthPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegAuthPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
