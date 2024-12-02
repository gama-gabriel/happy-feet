import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from './model/produto';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class BuscaService {
  constructor(private dataService: DataService) { }


  getAllItems(): Observable<any[]> {
    return this.dataService.getData();
  }

  getItemById(id: number): Observable<any> {
    return this.dataService.getDataById(id);
  }

  buscar(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.dataService.searchData(term);
  }
}
