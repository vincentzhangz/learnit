import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomepageProgressComponent } from './user-homepage-progress.component';

describe('UserHomepageProgressComponent', () => {
  let component: UserHomepageProgressComponent;
  let fixture: ComponentFixture<UserHomepageProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomepageProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomepageProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
