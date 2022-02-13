import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css'
  ]
})
export class SidebarComponent implements OnInit {

  istoggled : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  Btctoggled() : void {
    this.istoggled = !this.istoggled
  }

}
