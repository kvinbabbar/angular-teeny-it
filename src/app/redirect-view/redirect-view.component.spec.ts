import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectViewComponent } from './redirect-view.component';

describe('RedirectViewComponent', () => {
  let component: RedirectViewComponent;
  let fixture: ComponentFixture<RedirectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
