import { Injectable } from '@angular/core';
import { ServicoPrestado } from './entites/servicoPrestado';

import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    return  this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
}
}
