import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public errorMsg: string;

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {}

    /**
     * Call the user service login method with their parameters.
     * @param email The inputed email string.
     * @param password The inputed password string.
     */
    login(email: string, password: string): void {
        this.userService.login(email, password).subscribe(user => {
            if (user) {
                this.router.navigate(['/user']);
            } else {
                this.errorMsg =
                    'Hiba a belépési adatokban. Próbáld újra később';
            }
        });
    }

    clearError() {
        delete this.errorMsg;
    }
}
