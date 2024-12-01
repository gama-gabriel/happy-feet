import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { BuscaComponent } from './busca/busca.component';
import { ItemComponent } from './item/item.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: "", component: VitrineComponent },
  { path: 'vitrine', component: VitrineComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'item/:nome/:id', component: ItemComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];
