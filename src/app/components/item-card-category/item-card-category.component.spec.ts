import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardCategoryComponent } from './item-card-category.component';

describe('ItemCardCategoryComponent', () => {
  let component: ItemCardCategoryComponent;
  let fixture: ComponentFixture<ItemCardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
