import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDiaryComponent } from './health-diary.component';

describe('HealthDiaryComponent', () => {
  let component: HealthDiaryComponent;
  let fixture: ComponentFixture<HealthDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthDiaryComponent]
    });
    fixture = TestBed.createComponent(HealthDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
