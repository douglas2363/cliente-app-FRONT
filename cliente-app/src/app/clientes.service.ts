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
  // getClientes(): Observable<Cliente[]>{
  //   return null;
  // }

  getClientes(): Cliente[]{
      let cliente = new Cliente();
      cliente.id = 1;
      cliente.nome = 'Taty Ruivinha';
      cliente.dataCadastro = '08/02/2021';
      cliente.cpf = '02856643108';
      return [cliente]

  }
}
