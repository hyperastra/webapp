// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  apiUrl: 'http://127.0.0.1:8000/v1',
  firebase: {
    apiKey: 'AIzaSyB2adU28A0pR-M1Ycvrt3gIbQqAsEH8_QY',
    authDomain: 'hyperastra-development.firebaseapp.com',
    databaseURL: 'https://hyperastra-development.firebaseio.com',
    projectId: 'hyperastra-development',
    storageBucket: 'hyperastra-development.appspot.com',
    messagingSenderId: '231520864716',
    appId: '1:231520864716:web:a6afdaa11dcdfc3d407569',
    measurementId: 'G-8E2V6VHMH2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
