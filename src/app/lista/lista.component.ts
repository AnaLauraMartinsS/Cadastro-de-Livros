import { Component } from '@angular/core';
import { ICadastroLivro } from '../model/Icadastro-livro';
import { ICadastroAutor } from '../model/Icadastro-autor';
import { CadastroService } from '../cadastro/cadastro.component.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

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

  excluirAutor(index:number):void{
    this.cadastroService.excluirAutor(index)
  }

  excluirLivro(index:number): void{
    this.cadastroService.excluirLivro(index)
}

  salvarEdicao(index:number, tipo: string):void{

    if(tipo == "Autor"){
      const autor = this.cadastroService.getAutor(index);

      this.nomeAutorEdicao = autor.nome
    }else{
      
      const livro = this.cadastroService.getLivro(index);
      this.livroEdicao = livro.nome
      this.qtdLivroEdicao = livro.qtdLivro
      this.editoraEdicao = livro.editora
    }

    this.indexEdicao = index;
  }

  editarLivro(){
    this.cadastroService.editarLivro(this.indexEdicao, this.livroEdicao, this.qtdLivroEdicao, this.editoraEdicao);
  }
  
  editarAutor(){
    this.cadastroService.editarAutor(this.indexEdicao, this.nomeAutorEdicao);
  }

}
