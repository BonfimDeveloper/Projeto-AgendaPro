import {
  Component,
  inject,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabela-janeiro',
  templateUrl: './tabela-janeiro.component.html',
  styleUrls: ['./tabela-janeiro.component.css'],
})
export class TabelaJaneiroComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  public currentYear!: number;
  toppings = new FormControl<string[]>([]);
  public nomesSelecionados: string[] = [];
  toppingList: string[] = [
    'Lilia',
    'Lorena',
    'Cinthya',
    'Thais',
    'Valdir',
    'Raiza',
    'Carol',
    'Alessandra',
    'Mônica',
    'Mariana',
    'Marlete',

    'Bárbara',
  ];
  constructor(private dialog: MatDialog) {
    this.currentYear = new Date().getFullYear();
  }

  public ngOnInit(): void {
    this.obterValoresDoSelect();
  }

  public obterValoresDoSelect(): void {
    this.toppings.valueChanges.subscribe((value: string[] | null) => {
      console.log('Nomes selecionados:', value);
      if (value) {
        this.nomesSelecionados = value;
      }
    });
  }
  openDialog(): void {
    this.dialog.open(this.dialogTemplate);
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
