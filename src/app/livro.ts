export class Livro {
  codLivro: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: Array<string>;

  constructor(codLivro: number, codEditora: number, titulo: string, resumo: string, autores: Array<string>) {
    this.codLivro = codLivro;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}