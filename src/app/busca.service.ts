import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { listaProdutos, Produto } from './model/produto';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  private lista: Produto[] = listaProdutos;

  constructor() { }

  getAllItems(): Observable<any[]> {
    return of(this.lista);
  }

  getItemById(id: string | number): Observable<any> {
    const item = this.lista.find(item => item.codigo === +id);
    return of(item);
  }

  buscar(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }
    const resultado = this.lista.filter(item =>
      item.keywords.toLowerCase().includes(term.toLowerCase())
    );
    return of(resultado);
  }
}
