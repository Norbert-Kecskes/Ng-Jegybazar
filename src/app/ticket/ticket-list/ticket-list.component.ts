import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/shared/ticket-model';
import { TicketService } from 'src/app/shared/ticket.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
    tickets: TicketModel[];

    constructor(
        private ticketService: TicketService,
        public userService: UserService
    ) {}

    ngOnInit() {
        // this.tickets = this.ticketService.getAllTickets();
    }
}
