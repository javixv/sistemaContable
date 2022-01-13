import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class exchangeService {
  myAppUrl: string;
  myApiUrl: string;
  
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/exchange';
  }

  getExchange(): Observable<any>{    
    return this.http.get(this.myAppUrl + this.myApiUrl + '/GetAll');
  }
}