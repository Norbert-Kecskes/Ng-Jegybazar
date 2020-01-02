import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user-model';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {
    user: UserModel;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.user = this.userService.isLoggedIn ? this.userService.getCurrentUser() : new UserModel();
    }

    onSubmit() {
        if (this.user.id) {
            this.userService.updateUser(this.user);
        } else {
            this.userService.register(this.user);
        }

        this.router.navigate(['/user']);
    }
}
