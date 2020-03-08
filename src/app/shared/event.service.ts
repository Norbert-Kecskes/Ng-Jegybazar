import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventModel } from './event-model';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor(private http: HttpClient) {}

    /**
     * Get all events from the server.
     */
    getAllEvents() {
        return this.http.get(
            `${environment.firebaseConfig.databaseURL}/events.json`
        );
    }

    /**
     * This returns the specified event based on the id.
     * @param id The id of the event to retrieve.
     */
    getEventById(id: string): Observable<EventModel> {
        return this.http.get<EventModel>(
            `${environment.firebaseConfig.databaseURL}/events/${id}.json`
        );
    }

    update(param: EventModel) {
        // this.events = this.events.map(ev =>
        //     ev.id === param.id ? { ...param } : ev
        // );
    }

    /**
     * Create the new event beased on the filled form.
     * @param param the filled form param.
     */
    create(param: EventModel) {
        // this.events = [
        //     ...this.events,
        //     {
        //         id: this.getMaxId() + 1,
        //         name: param.name,
        //         date: param.date,
        //         pictureURL: param.pictureURL,
        //         description: param.description
        //     }
        // ];
    }

    /**
     * Get the max event id.
     */
    // private getMaxId() {
    //     return this.events.reduce((acc, elem) =>
    //         acc.id > elem.id ? acc : elem
    //     ).id;
    // }
}
