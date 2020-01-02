import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    isCollapsed = true;

    constructor(public userService: UserService, private router: Router) {}

    logout() {
        this.userService.logout();
        this.router.navigate(['/user/login']);
    }
}
