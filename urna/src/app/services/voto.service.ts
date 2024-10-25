import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apuracao } from '../models/apuracao';


@Injectable({
  providedIn: 'root'
})
export class VotoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/app/votos";

  constructor() { }

  votar(voto: any): Observable<string>{
    return this.http.post<string>(this.API+"/votar", voto);
  }
  realizarApuracao(): Observable<Apuracao> {
    return this.http.get<Apuracao>(this.API+"/apuracao");
  }
  
}
