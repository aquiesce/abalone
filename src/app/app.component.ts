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

  haveData: Boolean = false;
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
        this.haveData = true;
      },
      e => console.log('Error: ' + e),
      () => { console.log('get cods data complete'); });

      this.service.getBlackbeardData(environment.blackbeardDevUrl)
      .subscribe( d => {
          this.devEnvironment.blackbeardHealth = d;
          this.devEnvironment.blackbeardHealth.url = environment.blackbeardDevUrl;
          this.haveData = true;
        },
        e => console.log('Error: ' + e),
        () => { console.log('get backbeard data complete'); });
  }
}
