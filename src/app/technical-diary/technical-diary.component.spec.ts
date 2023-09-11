import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDiaryComponent } from './technical-diary.component';

describe('TechnicalDiaryComponent', () => {
  let component: TechnicalDiaryComponent;
  let fixture: ComponentFixture<TechnicalDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalDiaryComponent]
    });
    fixture = TestBed.createComponent(TechnicalDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
