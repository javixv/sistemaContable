import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {

  @Input() GridData : any[] = [{field : 'col1', title : 'col 1'},
                               {field : 'col2', title : 'col 2'},{field : 'col3', title : 'col '}
                              ]
                    

  @Input()ColData : any[] = [{id : 'col1', id2 : 'col2',id3 : 'col3',}]

  constructor() { }

  ngOnInit(): void {
  }

}
