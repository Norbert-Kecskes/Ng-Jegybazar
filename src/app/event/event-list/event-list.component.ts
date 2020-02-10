import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
    public events$: Observable<any>;

    constructor(
        private eventService: EventService,
        public userService: UserService
    ) {}

    ngOnInit() {
        this.events$ = this.eventService.getAllEvents();
    }
}
