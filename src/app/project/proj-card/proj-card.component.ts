import { Component, OnInit, Input } from '@angular/core';
import * as AOS  from 'aos' ;

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.css']
})
export class ProjCardComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
