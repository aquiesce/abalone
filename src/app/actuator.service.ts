import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CodsHealth } from '../model/CodsHealth';

@Injectable()
export class ActuatorService {

  constructor(private http: HttpClient) { }

  getCodsData(url: string): Observable<CodsHealth> {

    return this.http.get<CodsHealth>(url);

  }
}
