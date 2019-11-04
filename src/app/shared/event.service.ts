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

    getAllEvents(): EventModel[] {
        return this.events;
    }
}
