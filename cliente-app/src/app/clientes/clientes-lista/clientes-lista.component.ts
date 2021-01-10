import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../entites/cliente';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

 clientes: Cliente[] = [];
 clienteSelecionado: Cliente;
 mensagemSucesso:string;
 mensagemErro:string;

  constructor(
      private service: ClientesService,
      private router: Router

  ) { }

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe(resposta => this.clientes = resposta);
  
  }
 
  preparaDelecao(cliente:Cliente){
    this.clienteSelecionado = cliente;
  }
 
  novoCadastro(){
    this.router.navigate(['clientes-form'])
  }

  deletarCliente(){
    this.service
    .deletar(this.clienteSelecionado)
    .subscribe(response => {
      this.mensagemSucesso = 'Cliente deletado com sucesso!!'
      this.ngOnInit();
    },
    erro => this.mensagemErro = 'Erro ao deletar Cliente!'
    )
  }
}
