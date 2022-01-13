import { Component, OnInit } from '@angular/core';
import { TansaccionService } from '../services/tansaccion.service';

@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.component.html',
  styleUrls: ['./inversion.component.css']
})
export class InversionComponent implements OnInit {
 ListaTransacciones : any = []
  constructor(
    private transaccion:TansaccionService
    ) { }

  ngOnInit(): void {
    this.getTransacciones();
  }

 getTransacciones(){
    console.log('entro')
      this.transaccion.getViewTransacciones().subscribe(data => {
        console.log(data)
        this.ListaTransacciones = data
      })
  }

}
