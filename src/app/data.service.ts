import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './model/produto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "https://happy-feet-api-production.up.railway.app/produto";

  constructor(private http: HttpClient) { }

  getData(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl + "/all");
  }

  searchData(termo: string): Observable<Produto[]> {
    const params = new HttpParams().set('termo', termo);
    return this.http.get<Produto[]>(this.apiUrl + "/busca", { params });
  }

  getDataById(id: number): Observable<Produto[]> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Produto[]>(this.apiUrl, { params });
  }
}
