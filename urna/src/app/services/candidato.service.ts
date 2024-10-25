import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Candidato } from '../models/candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/app/candidatos";

  constructor() { }

  findAllCandidatos(): Observable<Candidato[]>  {
    return this.http.get<Candidato[]>(this.API+"/findAll");
  }
  findAtivos(): Observable<Candidato[]>  {
    return this.http.get<Candidato[]>(this.API+"/findAtivos");
  }

  findById(id: number): Observable<Candidato>{
    return this.http.get<Candidato>(this.API+"/find/"+id);
  }

  save(candidato: Candidato): Observable<Candidato>{
    return this.http.post<Candidato>(this.API+"/save",candidato);
  }
  
  update(candidato: Candidato): Observable<Candidato>{
    return this.http.put<Candidato>(this.API+"/update/"+candidato.id, candidato);
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }
}
