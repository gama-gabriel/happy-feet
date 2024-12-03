import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ActivatedRoute } from '@angular/router';
import { BuscaService } from '../busca.service';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { toast } from 'ngx-sonner';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { CarrinhoService } from '../carrinho.service';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, HlmToasterComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  item: Produto = new Produto();

  get semTamanho(): boolean {
    return this.carrinhoService.semTamanho;
  }

  range(floor: number, ceiling: number): number[] {
    const length = ceiling - floor + 1;
    return Array.from({ length }, (_, index) => floor + index);
  }

  constructor(
    private route: ActivatedRoute,
    private searchService: BuscaService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');

    if (itemId) {
      this.searchService.getItemById(Number(itemId)).subscribe({
        next: (data: Produto) => {
          this.item = data;
        },
        error: (err) => {
          console.error('Erro ao encontrar o produto: ', err);
        }
      });
    }
  }

  public selecionarTamanho(tamanho: number) {
    this.item.tamanhoSelecionado = tamanho;
    if (this.carrinhoService.semTamanho) {
      this.carrinhoService.semTamanho = !this.carrinhoService.semTamanho;
    }
  }

  public adicionarAoCarrinho(obj: Produto) {
    this.carrinhoService.adicionarAoCarrinho(obj);
  }
}
