import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from './user-model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLoggedIn = false;

    private user: UserModel;
    private allUsers: UserModel[];

    constructor(private http: HttpClient) {
        this.allUsers = [
            new UserModel({
                id: 0,
                name: 'Legyek Réka Matilda',
                email: 'legyekrekamatilda@valami.com',
                address: 'Futrinka utca',
                dateOfBirth: '2001-01-01',
                gender: 'female'
            }),
            new UserModel({
                id: 1,
                name: 'Pista Bá',
                email: 'pistaba@pistaba.com',
                address: 'Pistaba lak 12',
                dateOfBirth: '1900-01-01',
                gender: 'male'
            }),
            new UserModel({
                id: 2,
                name: 'Marcsa',
                email: 'marcsa@marcsa.hu',
                address: 'Marcsa var 42',
                dateOfBirth: '2000-01-01',
                gender: 'female'
            }),
            new UserModel({
                id: 3,
                name: 'Ifju satan',
                email: 'mzx@mzx.hu',
                address: 'namek',
                dateOfBirth: '2199-02-01',
                gender: 'satan fattya'
            }),
            new UserModel({
                id: 4,
                name: 'Jóska néni',
                email: 'joskaneni@joskaneni.com',
                address: 'Jóskaneni lak 12',
                dateOfBirth: '1950-01-01',
                gender: 'female'
            }),
            new UserModel({
                id: 5,
                name: 'Géza Bácsi',
                email: 'gezaba@gezaba.hu',
                address: 'Gázabá lak 12',
                dateOfBirth: '1940-01-01',
                gender: 'male'
            }),
            new UserModel({
                id: 6,
                name: 'Son Goku',
                email: 'songoku@songoku.com',
                address: 'Son Goku lak 24',
                dateOfBirth: '2110-01-01',
                gender: 'male'
            })
        ];
    }

    login(email: string, password: string) {
        return this.http.post(
            `${environment.firebaseConfig.loginUrl}?key=${environment.firebaseConfig.apiKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
        // if (email === 'Angular' && password === 'Angular') {
        //     this.user = new UserModel(UserModel.exampleUser);
        //     this.isLoggedIn = true;
        //     return true;
        // } else {
        //     return false;
        // }
    }

    register(param?: UserModel) {
        if (param) {
            this.user = new UserModel(param);
        } else {
            this.user = new UserModel(UserModel.exampleUser);
        }

        this.isLoggedIn = true;
    }

    logout() {
        this.user = new UserModel();
        this.isLoggedIn = false;
    }

    getUserById(id: number): UserModel {
        const user = this.allUsers.filter(u => u.id === +id);
        return user.length > 0 ? user[0] : new UserModel(UserModel.emptyUser);
    }

    getCurrentUser(): UserModel {
        return this.user;
    }

    updateUser(newUserParam: UserModel) {
        this.user = newUserParam;
        this.allUsers = this.allUsers.map(user =>
            user.id === this.user.id ? newUserParam : user
        );
    }
}
