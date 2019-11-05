import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public errorMsg: string;

    constructor(private userService: UserService) {}

    ngOnInit() {}

    login(email: string, password: string) {
        if (!this.userService.login(email, password)) {
            this.errorMsg = 'Hiba a belépési adatokban. Próbáld újra később';
        }
    }

    clearError() {
        delete(this.errorMsg);
    }
}
