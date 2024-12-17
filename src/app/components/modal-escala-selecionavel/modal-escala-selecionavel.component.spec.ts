import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEscalaSelecionavelComponent } from './modal-escala-selecionavel.component';

describe('ModalEscalaSelecionavelComponent', () => {
  let component: ModalEscalaSelecionavelComponent;
  let fixture: ComponentFixture<ModalEscalaSelecionavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEscalaSelecionavelComponent]
    });
    fixture = TestBed.createComponent(ModalEscalaSelecionavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
