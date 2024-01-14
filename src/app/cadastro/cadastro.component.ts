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

  livroEdicao!: string;
  qtdLivroEdicao!: number;
  editoraEdicao!: string;

  indexEdicao!: number;

  listaLivro!:ICadastroLivro[];
  listaAutores!:ICadastroAutor[];
  listaEditoras!:string;

  nomeAutorEdicao!: string;
 

  constructor (private cadastroService: CadastroService){
    this.listaLivro = this.cadastroService.livro;
    this.listaAutores = this.cadastroService.autor;
    this.listaEditoras = this.cadastroService.editora;
  }

  adicionarNovoLivro():void{
    this.cadastroService.adicionarLivro(this.livro, this.qtdLivro, this.editora)
  }

  adicionarNovoAutor():void{
    this.cadastroService.adicionarAutor(this.autores)
  }
 
}