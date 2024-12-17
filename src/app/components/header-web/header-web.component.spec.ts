import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWebComponent } from './header-web.component';

describe('HeaderWebComponent', () => {
  let component: HeaderWebComponent;
  let fixture: ComponentFixture<HeaderWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderWebComponent]
    });
    fixture = TestBed.createComponent(HeaderWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
