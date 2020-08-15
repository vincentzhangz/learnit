import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeCardCoursesComponent} from './home-card-courses.component';

describe('HomeCardCoursesComponent', () => {
  let component: HomeCardCoursesComponent;
  let fixture: ComponentFixture<HomeCardCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCardCoursesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
