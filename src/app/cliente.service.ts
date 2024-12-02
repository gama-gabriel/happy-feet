import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Cliente } from './model/cliente';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteSubject = new BehaviorSubject<Cliente>(this.getClientFromLocalStorage());
  cliente$ = this.clienteSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.clienteSubject.next(this.getClientFromLocalStorage());
    }
  }

  getCurrentCliente(): Cliente {
    return this.clienteSubject.getValue();
  }

  private getClientFromLocalStorage(): Cliente {
    if (isPlatformBrowser(this.platformId)) {
      const storedClient = localStorage.getItem('cliente');
      return storedClient ? JSON.parse(storedClient) : new Cliente()
    }
    return new Cliente();
  }

  cadastar(obj: Cliente) {
    let cliente = this.getCurrentCliente();
    if (cliente.id == "") {
      this.atualizar(cliente)
      return;
    }
    cliente = obj;
    cliente.id = "";
    localStorage.setItem('cliente', JSON.stringify(cliente));
    this.clienteSubject.next(cliente);
    toast('Cadastro realizado com sucesso!', {});
  }

  logar(obj: Cliente) {
    let cliente = this.getCurrentCliente();
    if (cliente.id == "") {
      this.atualizar(cliente)
      return;
    }
    cliente = obj;
    cliente.id = "";
    localStorage.setItem('cliente', JSON.stringify(cliente));
    this.clienteSubject.next(cliente);
    toast('Login realizado com sucesso', {});
  }

  private atualizar(obj: Cliente) {
    let cliente = this.getCurrentCliente();
    cliente = obj;
    localStorage.setItem('cliente', JSON.stringify(cliente));
    this.clienteSubject.next(cliente);
    toast('Cadastro atualizado com sucesso!', {});
  }

  sair() {
    this.clienteSubject.next(new Cliente());
    localStorage.removeItem('cliente');
  }
}
