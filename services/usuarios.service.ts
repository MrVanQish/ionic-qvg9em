import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UsuariosService {

  constructor(public http: HttpClient) { }


  getUsuarios(): Observable<any>{
    return this.http.get <any>('https://run.mocky.io/v3/7967d142-9582-4f25-bb0c-e74fb2ca2298')
  }

  getQuejas(): Observable<any>{
    return this.http.get <any> ('https://run.mocky.io/v3/79d1b6f3-d866-44aa-b094-e0cd2ad6c78c')
  }

}