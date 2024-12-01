import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:8080/produto"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl)
  }
}
