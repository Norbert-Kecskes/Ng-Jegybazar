import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isCollapsed = true;

    constructor(public userService: UserService) {}

    logout() {
        this.userService.logout();
    }
}
