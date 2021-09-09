import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AtivosComponent } from './ativos/ativos.component';
import { AtivoDetalheComponent } from './ativo-detalhe/ativo-detalhe.component';
import { AtivosService } from './ativos/ativos.service';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AtivosComponent,
    AtivoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AtivosService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
