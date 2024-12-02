import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HlmToasterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = "";
  senha = "";
  cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.clienteService.cliente$.subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  logar() {
    let cliente = new Cliente();
    cliente.nome = "gabriel";
    cliente.email = "gabriel@email.com";
    cliente.senha = "gabriel123";

    if (cliente.email == this.email && cliente.senha == this.senha) {
      this.clienteService.logar(cliente);
      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 300);
      return;
    }
    toast('E-mail ou senha incorretos', {});
  }

  login() {
    this.authService.login(this.email, this.senha)
  }

  esqueci() {
    this.router.navigate(["/esqueci"]);
  }
}

