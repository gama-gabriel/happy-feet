import { Component, OnInit } from '@angular/core';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { HlmPopoverCloseDirective, HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { lucideUser } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-botao-user',
  standalone: true,
  imports: [BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    BrnPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmPopoverCloseDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ lucideUser })],
  templateUrl: './botao-user.component.html',
  styleUrl: './botao-user.component.css'
})

export class BotaoUserComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.clienteService.cliente$.subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  sair() {
    this.clienteService.sair();
    window.location.reload();
  }
}
