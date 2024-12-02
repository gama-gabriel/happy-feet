import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './model/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://happy-feet-api-production.up.railway.app';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
      .subscribe(response => {
        localStorage.setItem('authToken', response.token);
      });
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  register(cliente: Cliente) {
    cliente.role = "USER";
    return this.http.post(`${this.apiUrl}/register`, cliente);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }
}


