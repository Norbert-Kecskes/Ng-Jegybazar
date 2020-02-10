import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule, CollapseModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { EventService } from './shared/event.service';
import { LoggedInGuard } from './shared/logged-in.guard';
import { TicketService } from './shared/ticket.service';
import { UserService } from './shared/user.service';

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
        AlertModule.forRoot(),
        HttpClientModule
    ],
    providers: [EventService, UserService, TicketService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
