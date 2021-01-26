import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestadoBusca } from './../../entites/servicoPrestadoBusca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome:string;
  mes:number;
  meses:number[];
  lista: ServicoPrestadoBusca[];

  constructor(
      private servicePrestadoBusca: ServicoPrestadoService
  ) { 
    this.meses =[1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    console.log("Nome :", this.nome)
    console.log("Mes :", this.mes)
    this.servicePrestadoBusca.buscar(this.nome, this.mes)
    .subscribe(response => this.lista = response)
    
  }

}
