import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventModel } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
    private events$: Observable<any>;
    public events: EventModel[];

    constructor(
        private eventService: EventService,
        public userService: UserService
    ) {}

    ngOnInit() {
        /**
         * Get the events object from the server, and
         * transform the event objects with uniq id to array elements without id,
         * then create event model with each piece of the elements.
         */
        this.events$ = this.eventService
            .getAllEvents()
            .pipe(
                map(data =>
                    Object.values(data).map(
                        elemOfFormattedData =>
                            new EventModel(elemOfFormattedData)
                    )
                )
            );
    }
}
