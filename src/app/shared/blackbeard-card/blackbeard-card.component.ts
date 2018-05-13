import { Component, OnInit, Input } from '@angular/core';
import { BlackbeardHealth } from '../../../model/BlackbeardHealth';

@Component({
  selector: 'app-blackbeard-card',
  templateUrl: './blackbeard-card.component.html',
  styleUrls: ['./blackbeard-card.component.css']
})
export class BlackbeardCardComponent implements OnInit {

  @Input() blackbeardHealth: BlackbeardHealth;

  constructor() { }

  ngOnInit() {
  }

}
