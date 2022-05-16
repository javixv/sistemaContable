import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TansaccionService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/transacciones';
  }

  getTransacciones(): Observable<any>{
    console.log('entro service')
    return this.http.get(this.myAppUrl + this.myApiUrl + '/GetAll');
  }

  getViewTransacciones(): Observable<any>{
    
    return this.http.get(this.myAppUrl + this.myApiUrl + '/GetAllView');
  }

  getViewCapitalCriptos(): Observable<any>{
    
    return this.http.get(this.myAppUrl + this.myApiUrl + '/ViewCapitalCriptos');
  }

  postGuardarT(model : any): Observable<any>{ 
    //console.log('modelos')   
    return this.http.post(this.myAppUrl + this.myApiUrl + '/GuardarT', model);
  }

  delete(model : any): Observable<any>{ 
    //console.log('modelos')   
    return this.http.get(this.myAppUrl + this.myApiUrl + '/delete?id='+ model);
  }

  getByIdTransaccion(model : any): Observable<any>{ 
    //console.log('modelos')   
    return this.http.get(this.myAppUrl + this.myApiUrl + '/GetById?id='+ model);
  }
  
  UpdateTransaccion(model : any): Observable<any>{ 
    //console.log('modelos')   
    return this.http.post(this.myAppUrl + this.myApiUrl + '/Update',model);
  }


}
