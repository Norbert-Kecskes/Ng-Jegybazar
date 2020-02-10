import { Injectable } from '@angular/core';
import { EventService } from '../event.service';
import { TicketModel } from '../ticket-model';
import { UserService } from '../user.service';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    private tickets: TicketModel[];

    constructor(
        private eventService: EventService,
        private userService: UserService
    ) {
        this.tickets = [
            new TicketModel({
                id: 1,
                date: '2018-05-02',
                artist: 'Iron Maiden',
                numberOfTickets: 5,
                minimalBidPrice: 2000,
                bidStep: 500,
                bidStartDate: '2017-11-05',
                bidEndDate: '2017-12-05',
                eventId: 1,
                sellerUserId: 1
            }),
            new TicketModel({
                id: 2,
                date: '2018-10-12',
                artist: 'Judas Priest',
                numberOfTickets: 4,
                minimalBidPrice: 4000,
                bidStep: 1000,
                bidStartDate: '2017-11-15',
                bidEndDate: '2017-12-16',
                eventId: 3,
                sellerUserId: 2
            }),
            new TicketModel({
                id: 3,
                date: '2018-10-02',
                artist: 'Manowar',
                numberOfTickets: 7,
                minimalBidPrice: 5000,
                bidStep: 2000,
                bidStartDate: '2018-01-05',
                bidEndDate: '2018-03-05',
                eventId: 2,
                sellerUserId: 4
            }),
            new TicketModel({
                id: 4,
                date: '2019-06-04',
                artist: 'Sabbaton',
                numberOfTickets: 5,
                minimalBidPrice: 10000,
                bidStep: 1000,
                bidStartDate: '2018-11-05',
                bidEndDate: '2018-12-05',
                eventId: 5,
                sellerUserId: 5
            }),
            new TicketModel({
                id: 5,
                date: '2018-11-06',
                artist: 'Dear Theater',
                numberOfTickets: 2,
                minimalBidPrice: 20000,
                bidStep: 2000,
                bidStartDate: '2018-09-05',
                bidEndDate: '2018-10-05',
                eventId: 6,
                sellerUserId: 3
            }),
            new TicketModel({
                id: 6,
                date: '2019-11-06',
                artist: 'Black Label Society',
                numberOfTickets: 1,
                minimalBidPrice: 15000,
                bidStep: 1500,
                bidStartDate: '2018-09-05',
                bidEndDate: '2018-10-05',
                eventId: 4,
                sellerUserId: 6
            })
        ];
    }

    /**
     * Get all tickets
     */
    getAllTickets() {
        return this.tickets.map(ticket => {
            return {
                ...ticket,
                event: this.eventService.getEventById(ticket.eventId),
                seller: this.userService.getUserById(ticket.sellerUserId)
            };
        });
    }

    /**
     * Get the event name by id.
     * @param id The id of the event to retrieve.
     */
    getEventNameById(id: number) {
        return this.eventService.getEventById(id).name;
    }

    create(param: TicketModel) {
        this.tickets = [
            ...this.tickets,
            new TicketModel({
                id: this.getMaxId() + 1,
                ...param,
                event: this.eventService.getEventById(param.eventId),
                seller: this.userService.getUserById(param.sellerUserId)
            })
        ];
    }

    /**
     * Get the max event id.
     */
    private getMaxId() {
        return this.tickets.reduce((acc, elem) =>
            acc.id > elem.id ? acc : elem
        ).id;
    }
}
