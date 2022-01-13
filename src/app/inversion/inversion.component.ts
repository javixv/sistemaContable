import { Component, OnInit } from '@angular/core';
import { TansaccionService } from '../services/tansaccion.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { exchangeService } from '../services/exchange.service';
import { criptomonedaService } from '../services/criptoMoneda.Service';
import { tipotransaccionService } from '../services/tipotransaccion.service';
@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.component.html',
  styleUrls: ['./inversion.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class InversionComponent implements OnInit {
  //Variables
 ListaTransacciones  : any = [];
 ListExchange        : any = [];
 ListTipoTransaccion : any = [];
 ListCriptoMoneda    : any = [];


  constructor(
    private transaccion:TansaccionService,
    private exchangeService:exchangeService,
    private criptomonedaService:criptomonedaService,
    private tipotransaccion : tipotransaccionService,
    config: NgbModalConfig, private modalService: NgbModal
    ) {
      // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

     }

  ngOnInit(): void {
    this.getTransacciones();
  }

 getTransacciones(){
    console.log('entro')
      this.transaccion.getViewTransacciones().subscribe(data => {
        //console.log(data)
        this.ListaTransacciones = data
      })

      this.exchangeService.getExchange().subscribe(data => {
        this.ListExchange = data;
      })

      this.criptomonedaService.getCriptoM().subscribe(data => {
        this.ListCriptoMoneda = data;
      })

      this.tipotransaccion.getTipoTransacciones().subscribe(data => {
        this.ListTipoTransaccion = data;
      })
  }

  open(content : any) {
    this.modalService.open(content,{
      size: 'lg'
    });
  }

}
