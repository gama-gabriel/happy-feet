import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, HlmToasterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.cliente$.subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  cadastrar() {
    this.clienteService.cadastar(this.cliente);
  }
}
