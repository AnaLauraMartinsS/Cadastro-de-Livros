import { Injectable } from "@angular/core"
import { ICadastroLivro } from "../model/Icadastro-livro"
import { ICadastroAutor } from "../model/Icadastro-autor";

@Injectable({
    providedIn: 'root'
})

export class CadastroService{

    editora="";

    livro: ICadastroLivro[] =[{
        nome: "O Colecionador",
        qtdLivro: 1,
        editora: "DarkSide Books"
    },
    {
        nome: "O Labirinto do Fauno",
        qtdLivro: 1,
        editora: "Intrinseca"
    }]

    autor: ICadastroAutor[] =[{
        nome: "Jhon Fowles"
    },{
        nome: "Guilermo del Toro & Conerlia"
    }]

    adicionarLivro(nomeRecebido: string, qtdLivroRecebido:number, editoraRecebido: string):void{
        const novoLivro: ICadastroLivro = {
            nome: nomeRecebido,
            qtdLivro: qtdLivroRecebido,
            editora: editoraRecebido
        }
    this.livro.push(novoLivro)
    }

    excluirLivro(index: number):void{
        this.livro.splice(index, 1)
    }

    adicionarAutor(nomeRecebido: string):void{
        const novoAutor: ICadastroAutor = {
            nome: nomeRecebido
        }
    this.autor.push(novoAutor)
    }


    excluirAutor(index: number):void{
        this.autor.splice(index, 1)
    }
}