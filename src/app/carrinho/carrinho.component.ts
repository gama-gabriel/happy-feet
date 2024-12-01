import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Cesta } from '../model/cesta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  cesta: Cesta = new Cesta();

  constructor(private carrinhoService: CarrinhoService = carrinhoService) { };
  ngOnInit(): void {
    this.carrinhoService.carrinho$.subscribe(carrinho => {
      this.cesta = carrinho;
    });
  }
}
