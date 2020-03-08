import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { TicketModel } from './ticket-model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    constructor(
        private eventService: EventService,
        private userService: UserService
    ) {}

    /**
     * Get all tickets
     */
    getAllTickets() {
        // return this.tickets.map(ticket => {
        //     return {
        //         ...ticket,
        //         event: this.eventService.getEventById(ticket.eventId),
        //         seller: this.userService.getUserById(ticket.sellerUserId)
        //     };
        // });
    }

    /**
     * Get the event name by id.
     * @param id The id of the event to retrieve.
     */
    getEventNameById(id: number) {
        // return this.eventService.getEventById(id).name;
    }

    create(param: TicketModel) {
        // this.tickets = [
        //     ...this.tickets,
        //     new TicketModel({
        //         id: this.getMaxId() + 1,
        //         ...param,
        //         event: this.eventService.getEventById(param.eventId),
        //         seller: this.userService.getUserById(param.sellerUserId)
        //     })
        // ];
    }

    /**
     * Get the max event id.
     */
    private getMaxId() {
        // return this.tickets.reduce((acc, elem) =>
        //     acc.id > elem.id ? acc : elem
        // ).id;
    }
}
