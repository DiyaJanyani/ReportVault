import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFiltersComponent } from './teacher-filters.component';

describe('TeacherFiltersComponent', () => {
  let component: TeacherFiltersComponent;
  let fixture: ComponentFixture<TeacherFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
