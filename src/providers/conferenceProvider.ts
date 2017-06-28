import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Session } from './session';
import { Speaker } from './speaker';

const kURL = "http://coppieters.be/sessions.json";

@Injectable()
export class ConferenceData {

  private sessions: Session[] = [];

  constructor(private http: Http) {}

  public getSessions(year): Promise<Session[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http
      .get(`${kURL}?request=session&year=${year}`, options)
      .toPromise()
      .then(response => this.sessions = response.json().data as Session[])
      .catch(this.handleError);
  }

  public getSpeakers(year): Promise<any> {
    // fake service call, cheat: return a resolved promise
    return Promise
      .resolve(this.sessions.map(session => new Speaker(session.speaker, session.bio)));
  }

  public getMapData() {
      return [{
            "name": "Howest Bruges",
            "lat": 51.192185,
            "lng": 3.214246,
            "center": true
        }, {
            "name": "Parking",
            "lat": 51.191842,
            "lng": 3.213452
        }];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}