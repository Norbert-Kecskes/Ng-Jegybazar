import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { NavbarComponent } from './core/navbar/navbar.component';

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
        CollapseModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
