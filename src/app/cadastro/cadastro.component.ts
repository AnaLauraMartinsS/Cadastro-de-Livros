import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ICadastroLivro } from '../model/Icadastro-livro';
import { ICadastroAutor } from '../model/Icadastro-autor';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {
  livro!: string;
  qtdLivro!: number;
  editora!: string;
  autores!: string;

  listaLivro!:ICadastroLivro[];
  listaAutores!:ICadastroAutor[];
  listaEditoras!:string;

  constructor (private cadastroService: CadastroService){
    this.listaLivro = this.cadastroService.livro;
    this.listaAutores = this.cadastroService.autor;
    this.listaEditoras = this.cadastroService.editora;
  }

  adicionarNovoLivro():void{
    this.cadastroService.adicionarLivro(this.livro, this.qtdLivro, this.editora)
  }
  excluirLivro(index:number): void{
    this.cadastroService.excluirLivro(index)
}
  adicionarNovoAutor():void{
    this.cadastroService.adicionarAutor(this.autores)
  }
  excluirAutor(index:number):void{
    this.cadastroService.excluirAutor(index)
  }
}
