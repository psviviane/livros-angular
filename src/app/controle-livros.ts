import {Injectable} from '@angular/core';
import {Livro} from './livro';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    public livros: Array<Livro> = [
        {
            codLivro: 1,
            codEditora: 1,
            titulo: 'Riacho Doce',
            resumo: 'Narra a história de uma jovem sueca que se apaixona por um pescador nordestino, vivendo um intenso conflito entre amor, cultura e tradição.',
            autores: ['José Lins do Rego']
        },
        {
            codLivro: 2,
            codEditora: 2,
            titulo: 'Java: Como Programar',
            resumo: 'O guia definitivo para aprender Java com foco no desenvolvimento de aplicações robustas e eficientes, cobrindo desde os conceitos basicos até as técnicas avançadas de programação.',
            autores: ['Paul Deitel', 'Harvey Deitel']
        },
        {
            codLivro: 3,
            codEditora: 3,
            titulo: 'O Senhor dos Anéis',
            resumo: 'Uma épica jornada de um grupo de heróis que se unem para destruir um anel, poderoso artefato que ameaça a paz do mundo.',
            autores: ['J.R.R. Tolkien']
        }
    ];

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const maxCodigo = this.livros.reduce((max, item) => item.codLivro > max ? item.codLivro : max, 0);
        livro.codLivro = maxCodigo + 1;
        this.livros.push(livro);
    }

    excluir(codLivro: number): void {
        const index = this.livros.findIndex(l => l.codLivro === codLivro);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}