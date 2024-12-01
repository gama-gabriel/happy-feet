import { Component, OnInit } from '@angular/core';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { HlmPopoverCloseDirective, HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { lucideShoppingCart } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { Cesta } from '../model/cesta';
import { CarrinhoService } from '../carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao-carrinho',
  standalone: true,
  imports: [BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    BrnPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmPopoverCloseDirective,
    HlmIconComponent,
    CommonModule
  ],
  providers: [provideIcons({ lucideShoppingCart })],
  templateUrl: './botao-carrinho.component.html',
  styleUrl: './botao-carrinho.component.css'
})

export class BotaoCarrinhoComponent implements OnInit {
  cesta: Cesta = new Cesta();

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoService.carrinho$.subscribe(carrinho => {
      this.cesta = carrinho;
    });
  }
}
