import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Eleitor } from '../models/eleitor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleitorService {

  http = inject(HttpClient);

  API = "http://localhost:8081/app/eleitores";

  constructor() { }

  findAllEleitores(): Observable<Eleitor[]>  {
    return this.http.get<Eleitor[]>(this.API+"/findAll");
  }

  findById(id: number): Observable<Eleitor>{
    return this.http.get<Eleitor>(this.API+"/find/"+id);
  }

  save(eleitor: Eleitor): Observable<Eleitor>{
    return this.http.post<Eleitor>(this.API+"/save",eleitor);
  }
  
  update(eleitor: Eleitor): Observable<Eleitor>{
    return this.http.put<Eleitor>(this.API+"/update/"+eleitor.id, eleitor);
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }
}
