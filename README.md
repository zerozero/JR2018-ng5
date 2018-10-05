# Jr2018

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.


##Notes

remember to set the active system node version with n
$ n 8.9.3

**Deploy to Heroku**

[see this](https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147)

toggle the start script in package.json for local/remote deploy

**Remote debugging** 

port 4200 has been opened with Murus
Attach the device with thunderbolt cable
Navigate to 192.168.1.173
modify npm start in package.json to:
"ng serve --host 0.0.0.0 --no-sourcemap"


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
