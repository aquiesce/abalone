import { Component, OnInit, Input } from '@angular/core';
import { CodsHealth } from '../../../model/CodsHealth';

@Component({
  selector: 'app-cods-card',
  templateUrl: './cods-card.component.html',
  styleUrls: ['./cods-card.component.css']
})
export class CodsCardComponent implements OnInit {

  @Input() codsHealth: CodsHealth;

  constructor() { }

  ngOnInit() {
  }
}
