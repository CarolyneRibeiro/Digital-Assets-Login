import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivoDetalheComponent } from './ativo-detalhe/ativo-detalhe.component';
import { AtivosComponent } from './ativos/ativos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'ativos', component: AtivosComponent },
  { path: 'ativo/:nome',component: AtivoDetalheComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
