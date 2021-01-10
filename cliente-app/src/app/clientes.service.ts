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
  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }
  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }
  getClientesById(id: number): Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }
  

  // getClientes(): Cliente[]{
  //     let cliente = new Cliente();
  //     cliente.id = 1;
  //     cliente.nome = 'Taty Ruivinha';
  //     cliente.dataCadastro = '08/02/2021';
  //     cliente.cpf = '02856643108';
  //     return [cliente]

  // }
}
