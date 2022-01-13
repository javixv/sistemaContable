import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class tipotransaccionService {
  myAppUrl: string;
  myApiUrl: string;
  
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/TipoTransaccion';
  }

  getTipoTransacciones(): Observable<any>{    
    return this.http.get(this.myAppUrl + this.myApiUrl + '/GetAll');
  }
}