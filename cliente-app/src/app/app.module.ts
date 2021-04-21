import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ServicoPrestadoModule} from './servico-prestado/servico-prestado.module';
import { AppRoutingModule } from './app-routing.module';
import {TemplateModule} from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

import { ClientesService } from './clientes.service';
import { ServicoPrestadoService } from './servico-prestado.service';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    FormsModule

  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
