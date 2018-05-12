import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { RootObject } from '../model/Actuator';

@Injectable()
export class ActuatorService {

  constructor(private http: HttpClient) { }

  getData(): Observable<RootObject> {

    return this.http.get<RootObject>('/assets/test.json');

  }
}
