import { Component, OnInit } from '@angular/core';
import { TansaccionService } from '../services/tansaccion.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { exchangeService } from '../services/exchange.service';
import { criptomonedaService } from '../services/criptoMoneda.Service';
import { tipotransaccionService } from '../services/tipotransaccion.service';
import { inversionModel } from '../Model/inversion.model';
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
 SimboloTransaccion  : any = "far fa-paper-plane";
 //Variables para Guardar Transacciones
 Vidtransaccion : any
 Vprecio : any
 VidExchange  : any
 VidCriptomoneda : any
 VInversion : any
 Vcantidadcripto : any


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
        console.log(data)
        this.ListTipoTransaccion = data;
      })
  }

  open(content : any) {
    this.modalService.open(content,{
      size: 'lg'
    });
  }

  OnCambiarTT(id : any){
    //console.log(id.target.value)
    if(id.target.value === "1"){      
      this.SimboloTransaccion = "fas fa-sign-in-alt"
    }
    if(id.target.value === "2"){
      this.SimboloTransaccion = "fas fa-sync"      
    }
    if(id.target.value === "3"){
      this.SimboloTransaccion = "fas fa-external-link-alt"      
    }
    if(id.target.value === "4"){
      this.SimboloTransaccion = "fas fa-chart-line"      
    }
    if(id.target.value === "5"){
      this.SimboloTransaccion = "far fa-paper-plane"      
    }
    
  }

  guardarTransaccion() :void {

    let f = Date.now

    const models : inversionModel = {
      idTransaccion : this.Vidtransaccion,
      idExchangeOrigen : this.VidExchange,
      IdCriptoMoneda :this.VidCriptomoneda,
      Fecha : f,
      Precio : this.Vprecio,
      Inversion : this.VInversion,
      CantidadCripto : this.Vcantidadcripto,
      Estado : true,
      idExchangeDestino : 0,
      idcriptomonedaDestino : 0,
      cantidadCriptoDestino : 0

      
    }
    console.log(models);
    /*this.transaccion.postGuardarT().subscribe(){data => {

    }}*/
  }

}
