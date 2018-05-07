import { Component, OnInit } from '@angular/core';
import { ActuatorService } from './actuator.service';
import { RootObject } from '../model/Actuator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  currentConfig: RootObject;
  haveData: Boolean = false;

  constructor(private service: ActuatorService) {}

  showConfig() {

    this.service.getData()
    .subscribe(data => {
        console.log(data);
        console.log(data.status);
        console.log(data.diskSpace.status);
        console.log(data.mongo.version);
        console.log(data.mongo.status);
        console.log(data.db.status);
        this.currentConfig = data;
        this.haveData = true;
    });

  }

  clearData() {
    this.haveData = false;
  }

}
