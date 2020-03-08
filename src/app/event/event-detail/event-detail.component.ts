import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
    event$: Observable<EventModel>;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService,
        private location: Location
    ) {}

    ngOnInit() {
        // Get the id from the url params and get the event based on this id.
        const eventId = this.route.snapshot.params.id;
        // Get the event based on the id.
        this.event$ = this.eventService.getEventById(eventId);
    }

    /**
     * Run when we submit the form.
     * @param formValue the filled form params.
     */
    onSubmit(formValue: any) {
        // if (this.event.id !== 0) {
        //     this.eventService.update(this.event);
        // } else {
        //     this.eventService.create(this.event);
        // }
        // this.location.back();
    }
}
