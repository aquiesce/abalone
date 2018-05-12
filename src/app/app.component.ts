import { Component, OnInit } from '@angular/core';
import { ActuatorService } from './actuator.service';
import { RootObject } from '../model/Actuator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  currentConfig: RootObject;
  haveData: Boolean = false;

  constructor(private service: ActuatorService) {

    console.log('constructor');

  }


  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {

    console.log('here');

    this.service.getData()
    .subscribe(
      data => {
        this.currentConfig = data;
        this.haveData = true;
      },
      error => console.log('Error: ' + error),
      () => {
        console.log('complete');
      }
    );
  }

  clearData() {
    this.haveData = false;
  }

}
