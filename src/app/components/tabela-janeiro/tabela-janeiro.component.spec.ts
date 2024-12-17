import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaJaneiroComponent } from './tabela-janeiro.component';

describe('TabelaJaneiroComponent', () => {
  let component: TabelaJaneiroComponent;
  let fixture: ComponentFixture<TabelaJaneiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaJaneiroComponent]
    });
    fixture = TestBed.createComponent(TabelaJaneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
