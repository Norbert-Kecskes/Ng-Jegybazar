import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { EventModel } from 'src/app/shared/event-model';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {
    public events: EventModel[];

    constructor(private eventService: EventService, public userService: UserService) {
        this.events = eventService.getAllEvents();
    }

    ngOnInit() {
    }
}
