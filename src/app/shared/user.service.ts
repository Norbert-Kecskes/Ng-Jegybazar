import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IFirebaseLoginResp } from './interface/firebase-login-resp';
import { UserModel } from './user-model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLoggedIn = false;

    private user: UserModel;
    private allUsers: UserModel[];

    constructor(private http: HttpClient) {}

    /**
     * Login.
     * Post an email and a password to the api, then process the response.
     * If auth was passed, we got a local id, and we can get the user data.
     */
    login(email: string, password: string) {
        return this.http
            .post<IFirebaseLoginResp>(
                `${environment.firebaseConfig.loginUrl}?key=${environment.firebaseConfig.apiKey}`,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(
                catchError(err => {
                    throw err.error.error.message;
                }),
                switchMap((fbLoginResp: IFirebaseLoginResp) =>
                    this.http.get(
                        `${environment.firebaseConfig.databaseURL}/users/${fbLoginResp.localId}.json`
                    )
                ),
                tap((user: UserModel) => {
                    this.isLoggedIn = true;
                    this.user = new UserModel(user);
                })
            );
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
