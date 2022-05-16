import { Component, OnInit } from '@angular/core';
import { TansaccionService } from '../services/transaccion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /*template: `
  <div class="container">

<div>
<h1>Mercado de Cripto Divisas 00</h1>
</div>
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container alin-center">
<div class="tradingview-widget-container__widget"></div>
<div class="tradingview-widget-copyright"><a href="https://es.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Mercados de criptodivisas</span></a> por TradingView</div>
<script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
    {
    "width": "100%",
    "height": 490,
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "dark",
    "locale": "es",
    "isTransparent": false
  }
    </script>
</div>
<!-- TradingView Widget END -->
</div>
`,*/
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 lista : any
 columnas : any = [{field : 'id', title :'ID'},
                   //{field : 'conteo', title :'Conteo'},
                   {field : 'abrev', title :'Abrev'},
                   {field : 'usd', title :'USD'},
                   {field : 'total', title :'Total'}]
  constructor(private transaccion : TansaccionService ) { }

  ngOnInit(): void {
    this.getViewCriptos()
  }


  getViewCriptos(){
    this.transaccion.getViewCapitalCriptos().subscribe(data => {
      this.lista = data
      console.log(data)
    })
  }
  /*
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
    {
    "width": "100%",
    "height": 490,
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "dark",
    "locale": "es",
    "isTransparent": false
  }
    </script>*/
}
