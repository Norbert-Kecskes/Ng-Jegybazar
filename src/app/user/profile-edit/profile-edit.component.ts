import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user-model';
import { UserService } from 'src/app/shared/user.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {
    user: UserModel;

    constructor(private userService: UserService, private location: Location) { }

    ngOnInit() {
        this.user = this.userService.getCurrentUser();
    }

    onSubmit() {
        this.userService.updateUser(this.user);
        this.location.back();
    }
}
