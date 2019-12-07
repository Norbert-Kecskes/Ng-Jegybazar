import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user-model';
import { UserService } from 'src/app/shared/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: UserModel;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user = this.userService.getCurrentUser();
    }

}
