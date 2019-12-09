import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { EventModel } from 'src/app/shared/event-model';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {
    public events: EventModel[];

    constructor(private eventService: EventService) {
        this.events = eventService.getAllEvents();
    }

    ngOnInit() {
    }
}
