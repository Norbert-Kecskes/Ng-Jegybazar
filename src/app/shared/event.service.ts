import { Injectable } from '@angular/core';
import { EventModel } from './event-model';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    private events: EventModel[];

    constructor() {
        this.events = [
            {
                id: 1,
                name: 'Sziget Fesztivál',
                date: '2019-08-03',
                pictureURL: 'assets/img/sziget.png',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 2,
                name: 'Diótörő Balett',
                date: '2019-11-23',
                pictureURL: 'assets/img/diotoro.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 3,
                name: 'Macskák Musical',
                date: '2020-02-11',
                pictureURL: 'assets/img/macskak.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 4,
                name: 'Sziget Fesztivál',
                date: '2019-08-03',
                pictureURL: 'assets/img/sziget.png',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 5,
                name: 'Diótörő Balett',
                date: '2019-11-23',
                pictureURL: 'assets/img/diotoro.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 6,
                name: 'Macskák Musical',
                date: '2020-02-11',
                pictureURL: 'assets/img/macskak.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 7,
                name: 'Sziget Fesztivál',
                date: '2019-08-03',
                pictureURL: 'assets/img/sziget.png',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 8,
                name: 'Diótörő Balett',
                date: '2019-11-23',
                pictureURL: 'assets/img/diotoro.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            },
            {
                id: 9,
                name: 'Macskák Musical',
                date: '2020-02-11',
                pictureURL: 'assets/img/macskak.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
            }
        ];
    }

    /**
     * Get all events.
     */
    getAllEvents(): EventModel[] {
        return this.events;
    }

    /**
     * This returns the specified event based on the id.
     * @param id The id of the event to retrieve.
     */
    getEventById(id: number): EventModel {
        const ev = this.events.filter(event => event.id === id);
        return ev.length > 0 ? ev[0] : new EventModel(EventModel.emptyEvent);
    }

    update(param: EventModel) {
        this.events = this.events.map(ev => ev.id === param.id ? {...param} : ev);
    }

    /**
     * Create the new event beased on the filled form.
     * @param param the filled form param.
     */
    create(param: EventModel) {
        this.events = [
            ...this.events,
            {
                id: this.getMaxId() + 1,
                name: param.name,
                date: param.date,
                pictureURL: param.pictureURL,
                description: param.description
            }
        ];
    }

    /**
     * Get the max event id.
     */
    private getMaxId() {
        return this.events.reduce((acc, elem) => acc.id > elem.id ? acc : elem).id;
    }
}
