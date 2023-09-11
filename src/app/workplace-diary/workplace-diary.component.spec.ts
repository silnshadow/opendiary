import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceDiaryComponent } from './workplace-diary.component';

describe('WorkplaceDiaryComponent', () => {
  let component: WorkplaceDiaryComponent;
  let fixture: ComponentFixture<WorkplaceDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkplaceDiaryComponent]
    });
    fixture = TestBed.createComponent(WorkplaceDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
