import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, HlmToasterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cliente = new Cliente();

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.cliente).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
      },
      error: (err) => {
        console.error('Registration failed', err);
      }
    });
  }
}
