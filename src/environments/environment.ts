// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC4EvJql0nvpzMI5FTrlXVvSKTyli96eoc',
    authDomain: 'todo-app-c239f.firebaseapp.com',
    databaseURL: 'https://todo-app-c239f.firebaseio.com',
    projectId: 'todo-app-c239f',
    storageBucket: 'todo-app-c239f.appspot.com',
    messagingSenderId: '465935469681'},
    apiUrl: 'http://ec2co-ecsel-11p5ippf51j6n-435862307.us-east-1.elb.amazonaws.com:8099/tet/v1/touchpoints?touchpoint=Touchpoint1'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
