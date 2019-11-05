import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user-model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    isLoggedIn = false;

    private user: UserModel;

    constructor(private router: Router) {}

    login(email: string, password: string): boolean {
        if (email === 'Angular' && password === 'Angular') {
            this.user = new UserModel(UserModel.exampleUser);
            this.isLoggedIn = true;
            this.router.navigate(['/user']);
        } else {
            return false;
        }
    }

    register(param?: UserModel) {
        if (param) {
            this.user = new UserModel(param);
        } else {
            this.user = new UserModel(UserModel.exampleUser);
        }

        this.isLoggedIn = true;
        this.router.navigate(['/user']);
    }

    logout() {
        this.user = new UserModel();
        this.isLoggedIn = false;
        this.router.navigate(['/user/login']);
    }
}
