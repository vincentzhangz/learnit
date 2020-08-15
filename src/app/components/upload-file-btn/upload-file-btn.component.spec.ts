import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadFileBtnComponent} from './upload-file-btn.component';

describe('UploadFileBtnComponent', () => {
  let component: UploadFileBtnComponent;
  let fixture: ComponentFixture<UploadFileBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadFileBtnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
