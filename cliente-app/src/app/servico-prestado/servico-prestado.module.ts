import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';


@NgModule({
  declarations: [ServicoPrestadoFormComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule
  ]
})
export class ServicoPrestadoModule { }
