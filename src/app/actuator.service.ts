import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CodsHealth } from '../model/CodsHealth';
import { BlackbeardHealth } from '../model/BlackbeardHealth';

@Injectable()
export class ActuatorService {

  constructor(private http: HttpClient) { }

  getCodsData(url: string): Observable<CodsHealth> {

    return this.http.get<CodsHealth>(url);

  }

  getBlackbeardData(url: string): Observable<BlackbeardHealth> {

    return this.http.get<BlackbeardHealth>(url);

  }
}
