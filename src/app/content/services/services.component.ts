import { Component, OnInit } from '@angular/core';
// import { AOS } from 'node_modules/aos/dist/'
import * as AOS  from 'aos' ;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
