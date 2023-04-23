import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  educURL = 'http://localhost:8080/educacion/'
  // educURL= 'https://backend-argprograma-1wpj.onrender.com/educacion/'

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educURL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>('http://localhost:8080/' + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/' + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/' + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8080/' + `delete/${id}`);
  }
}
