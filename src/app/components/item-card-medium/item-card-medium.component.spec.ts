import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemCardMediumComponent} from './item-card-medium.component';

describe('ItemCardMediumComponent', () => {
  let component: ItemCardMediumComponent;
  let fixture: ComponentFixture<ItemCardMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardMediumComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
