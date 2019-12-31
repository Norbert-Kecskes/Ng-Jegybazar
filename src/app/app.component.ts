import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Jegybazar';

    constructor(private userService: UserService) {
        this.userService.login('angular', 'angular');
    }
}
