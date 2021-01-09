import { Injectable } from '@angular/core';
import { Cliente } from './entites/cliente';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  Cliente: Cliente;

  constructor(
    private http: HttpClient
  ) { } 

  salvar(cliente : Cliente) : Observable<Cliente>{
      return  this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);

  }
  
  // getCliente(): Cliente{
  //   let cliente : Cliente = new Cliente();
  //   cliente.nome = 'Douglas Lima';
  //   cliente.cpf = '02856643108';
  //   return cliente;

  // }

}
