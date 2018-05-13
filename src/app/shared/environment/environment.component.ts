import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentHealth } from '../../../model/EnvironmentHealth';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  @Input() environment: EnvironmentHealth;
  @Input() environmentName: string;

  constructor() { }

  ngOnInit() {
  }

}
