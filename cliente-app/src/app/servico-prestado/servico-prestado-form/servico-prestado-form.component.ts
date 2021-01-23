import { ServicoPrestadoService } from './../../servico-prestado.service';
import { Component, OnInit } from '@angular/core';

import { ServicoPrestado } from './../../entites/servicoPrestado';
import { Cliente } from 'src/app/entites/cliente';
import { ClientesService } from './../../clientes.service';



@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico:ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private servicoService: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe(response => this.clientes = response);
    
  }

  onSubmit(){
   this.servicoService.
   salvar(this.servico)
   .subscribe(response => {
     console.log(response);
   });
  }

}
