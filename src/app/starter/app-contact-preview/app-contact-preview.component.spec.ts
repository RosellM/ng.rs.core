import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactPreviewComponent } from './app-contact-preview.component';

describe('AppContactPreviewComponent', () => {
  let component: AppContactPreviewComponent;
  let fixture: ComponentFixture<AppContactPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
