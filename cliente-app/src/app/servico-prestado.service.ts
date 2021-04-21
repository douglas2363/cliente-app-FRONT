import { ServicoPrestadoBusca } from './entites/servicoPrestadoBusca';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './entites/servicoPrestado';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  servico:ServicoPrestado;
  apiURL: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(  private http: HttpClient ) { }

  salvar(servicoPrestado : ServicoPrestado) : Observable<ServicoPrestado>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
        'Authorization' : 'Bearer' + token.access_token
    }
    return  this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado, {headers});

  }
  buscar(nome: string, mes:number) : Observable <ServicoPrestadoBusca[]>{
    
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ?  mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);

  }
}
