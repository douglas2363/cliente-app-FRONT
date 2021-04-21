import { Injectable } from '@angular/core';
import { Cliente } from './entites/cliente';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  Cliente: Cliente;
  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(
    private http: HttpClient
  ) { } 

  salvar(cliente : Cliente) : Observable<Cliente>{
    return  this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }
  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiURL);
  }
  getClientesById(id: number): Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<Cliente>(`${this.apiURL}/${cliente.id}`);
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
