import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDiaryComponent } from './personal-diary.component';

describe('PersonalDiaryComponent', () => {
  let component: PersonalDiaryComponent;
  let fixture: ComponentFixture<PersonalDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDiaryComponent]
    });
    fixture = TestBed.createComponent(PersonalDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
