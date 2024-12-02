import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './model/produto';
import { isPlatformBrowser } from '@angular/common';
import { Cesta } from './model/cesta';
import { Item } from './model/item';
import { toast } from 'ngx-sonner';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinhoSubject = new BehaviorSubject<Cesta>(this.getCartFromLocalStorage());
  carrinho$ = this.carrinhoSubject.asObservable();
  semTamanho = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private clienteService: ClienteService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.carrinhoSubject.next(this.getCartFromLocalStorage());
    }
  }

  private getCartFromLocalStorage(): Cesta {
    if (isPlatformBrowser(this.platformId)) {
      const storedCarrinho = localStorage.getItem('cesta');
      return storedCarrinho ? JSON.parse(storedCarrinho) : new Cesta();
    }
    return new Cesta();
  }

  getSemTamanho() {
    return this.semTamanho;
  }

  adicionarAoCarrinho(obj: Produto) {
    if (!obj.tamanhoSelecionado) {
      this.semTamanho = true;
      return;
    }

    let cesta = this.getCartFromLocalStorage();
    let cliente = this.clienteService.getCurrentCliente();

    let item: Item = new Item();
    let found = false;

    if (cesta.itens.length == 0) {
      item.id = obj.id;
      item.produto = obj;
      item.quantidade = 1;
      item.valor = obj.preco;
      cesta.id = 1;
      cesta.total = obj.preco;
      cesta.itens.push(item);
      if (cliente) cesta.cliente = cliente;
    } else {
      for (let i = 0; i < cesta.itens.length; i++) {
        if (cesta.itens[i].id === obj.id) {
          cesta.itens[i].quantidade += 1;
          cesta.itens[i].valor = cesta.itens[i].quantidade * cesta.itens[i].produto.preco;
          cesta.itens[i].tamanhos.push(obj.tamanhoSelecionado as number);
          found = true;
          break;
        }
      }
      if (!found) {
        item.id = obj.id;
        item.produto = obj;
        item.quantidade = 1;
        item.valor = obj.preco;
        cesta.itens.push(item);
      }
    }

    cesta.total = cesta.itens.reduce((acc, curr) => acc + curr.valor, 0);

    localStorage.setItem('cesta', JSON.stringify(cesta));
    this.carrinhoSubject.next(cesta);

    toast('Item adicionado ao carrinho', {
      description: 'Clique no carrinho na barra superior para finalizar sua compra',
    });
  }
}
