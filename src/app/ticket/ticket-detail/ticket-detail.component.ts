import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/shared/ticket-model';
import { EventModel } from 'src/app/shared/event-model';
import { TicketService } from 'src/app/shared/ticket.service';
import { EventService } from 'src/app/shared/event.service';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss']
})

export class TicketDetailComponent implements OnInit {
    ticket: TicketModel;
    events: EventModel[];

    constructor(private ticketService: TicketService,
                private eventService: EventService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        this.ticket = new TicketModel(TicketModel.emptyTicket);
        this.events = this.eventService.getAllEvents();
        this.ticket.sellerUserId = this.userService.getCurrentUser().id;
    }

    onSubmit() {
        this.ticketService.create(this.ticket);
        this.router.navigate(['/ticket']);
    }
}
