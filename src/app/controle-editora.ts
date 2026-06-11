import {Injectable} from '@angular/core';
import {Editora} from './editora';

@Injectable({
    providedIn: 'root'
})
export class ControleEditoraService {
    public editoras: Array<Editora> = [
        { codEditora: 1, nome: 'Jardim das Letras'},
        { codEditora: 2, nome: 'Logos Acadêmica'},
        { codEditora: 3, nome: 'Cripta dos Livros'},
    ];
getEditoras(): Array<Editora> {
    return this.editoras;
}
 getNomeEditora(codEditora: number): string {
    const resultado = this.editoras.filter(e => e.codEditora === codEditora);
    return resultado.length > 0 ? resultado[0].nome : 'Editora não encontrada';
  }
}