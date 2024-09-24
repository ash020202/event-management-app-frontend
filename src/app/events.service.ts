import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  arrayLength: boolean = false;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get(
      'https://event-management-backend-zjzz.onrender.com/api/events'
    );
  }
  addEvent(eventData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      'https://event-management-backend-zjzz.onrender.com/api/events',
      eventData,
      { headers: headers }
    );
  }
  individualEvent(id: any) {
    return this.http.get<any>(
      'https://event-management-backend-zjzz.onrender.com/api/events/' + id
    );
  }

  deleteEvent(id: any) {
    this.http
      .delete(
        'https://event-management-backend-zjzz.onrender.com/api/events/' + id
      )
      .subscribe();
  }

  updateEvent(id: any, eventData: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(
      'https://event-management-backend-zjzz.onrender.com/api/events/' + id,
      eventData,
      { headers: headers }
    );
  }
}
// class EventInfo {
//   title!: string;
//   description!: string;
//   location!: string;
//   date!: string;
//   imageUrl!: string;
//   time!: string;
// }
