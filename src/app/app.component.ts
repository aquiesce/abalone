import { Component, OnInit } from '@angular/core';
import { ActuatorService } from './actuator.service';
import { CodsHealth } from '../model/CodsHealth';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { EnvironmentHealth } from '../model/EnvironmentHealth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  devCodsHealth: CodsHealth;
  haveData: Boolean = false;

  newCodsHealth: CodsHealth;

  devEnvironment: EnvironmentHealth;
  preProdEnvironment: EnvironmentHealth;
  prodEnvironment: EnvironmentHealth;

  constructor(private service: ActuatorService) {

    this.devEnvironment = new EnvironmentHealth('dev');
    this.preProdEnvironment = new EnvironmentHealth('pre');
    this.prodEnvironment = new EnvironmentHealth('prod');
  }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {

    this.service.getCodsData(environment.codsDevUrl)
    .subscribe( d => {
        this.devEnvironment.codsHealth = d;
        this.devEnvironment.codsHealth.url = environment.codsDevUrl;
        console.log('log:' + this.devEnvironment.codsHealth.status);
        this.haveData = true;
      },
      e => console.log('Error: ' + e),
      () => { console.log('complete'); });
  }

  clearData() {
    this.haveData = false;
  }

  getCodsHealth(url): CodsHealth {

    let returnedHealth = new CodsHealth();

    this.service.getCodsData(environment.codsDevUrl)
    .subscribe(
      data => { returnedHealth = data; },
      error => console.log('Error: ' + error),
      () => { console.log('wibble'); }
    );

    console.log('wwww: ' + returnedHealth.status)

    return returnedHealth;
  }

}
