import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  meuBooleano: boolean = false;
  name = 'Gustavo';
  idButton = 'testetete';
  deveMostrarTitulo = true;
  listItems = ['item 1', 'item 2', 'item 3'];

  @Input('nameProps') minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  atualizaBooleano(valor: boolean) {
    this.meuBooleano = valor;
  }

  // submit(event: any) {
  //   console.log(event);
  //   this.deveMostrarTitulo = !this.deveMostrarTitulo;
  // }

  submit() {
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackEnd(
      'Enviando informação para o backEnd'
    );
  }
}
