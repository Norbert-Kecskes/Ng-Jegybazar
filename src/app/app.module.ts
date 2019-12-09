import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { EventService } from './shared/event.service';
import { UserService } from './shared/user.service';
import { TicketService } from './shared/ticket.service';
import { LoggedInGuard } from './shared/logged-in.guard';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        JumbotronComponent,
        NavbarComponent,
        ...AppRoutingModule.routableComponents
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        CollapseModule.forRoot(),
        AlertModule.forRoot()
    ],
    providers: [EventService, UserService, TicketService, LoggedInGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }
