import { Routes } from '@angular/router';
import { ListarPessoaComponent } from './pages/listar-pessoa/listar-pessoa.component';

export const routes: Routes = [
  {path: '', redirectTo: 'pessoas/listar',
    pathMatch: 'full',
  },
  {
    path: 'pessoas', redirectTo: 'pessoas/listar'
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent
  }
];
