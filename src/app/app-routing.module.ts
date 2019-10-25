import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BidComponent } from './bid/bid.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventcardComponent } from './eventcard/eventcard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { RegistrationComponent } from './registration/registration.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'event', component: EventComponent, children: [
        {path: 'list', component: EventListComponent},
        {path: ':id/edit', component: EventDetailComponent}
    ]},
    {path: 'ticket', component: TicketComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    static routableComponents = [
        AboutComponent,
        BidComponent,
        EventComponent,
        EventDetailComponent,
        EventListComponent,
        EventcardComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent,
        ProfileComponent,
        ProfileEditComponent,
        RegistrationComponent,
        TicketComponent,
        TicketDetailComponent,
        TicketListComponent
    ];
}
