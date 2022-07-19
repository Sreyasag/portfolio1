import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.css']
})
export class ProjCardComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
