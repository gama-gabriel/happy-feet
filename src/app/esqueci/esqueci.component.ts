import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-esqueci',
  standalone: true,
  imports: [CommonModule, FormsModule, HlmToasterComponent],
  templateUrl: './esqueci.component.html',
  styleUrl: './esqueci.component.css'
})
export class EsqueciComponent {
  emailCerto: string = "gabriel@email.com";
  emailCertos: string = "admin@email.com";
  email = "";

  recuperar() {

    if (this.email == this.emailCerto) {
      toast('Email para recuperar a senha enviado', {});
      return;
    }
    if (this.email == this.emailCertos) {
      toast('Email para recuperar a senha enviado', {});
      return;
    }
    toast('E-mail incorreto', {});
  }

}
