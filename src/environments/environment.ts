// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCWHU6GF9OaDcyeVVbC47hvgImxXUcokMc',
        authDomain: 'jegybazar-cd118.firebaseapp.com',
        databaseURL: 'https://jegybazar-cd118.firebaseio.com',
        loginUrl:
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
        projectId: 'jegybazar-cd118',
        registrationUrl:
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
        storageBucket: 'jegybazar-cd118.appspot.com',
        messagingSenderId: '603697350715',
        appId: '1:603697350715:web:fccf8d8dc289abb832341e',
        measurementId: 'G-MV0BRGX4MV'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
