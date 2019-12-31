import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { EventModel } from 'src/app/shared/event-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent implements OnInit {
    event: EventModel;

    constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location) {}

    ngOnInit() {
        // Get the id from the url params and get the event based on this id.
        const eventId = +this.route.snapshot.params.id;
        this.event = this.eventService.getEventById(eventId);
    }

    /**
     * Run when we submit the form.
     * @param formValue the filled form params.
     */
    onSubmit(formValue: any) {
        if (this.event.id !== 0) {
            this.eventService.update(this.event);
        } else {
            this.eventService.create(this.event);
        }

        this.location.back();
    }

}
