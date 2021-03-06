# README #

A demo MANK stack (MonogoDB, AngularJS, NodeJS, Koa) stock item app that provides CRUD operations to store vehicle information. It makes use of NodeJS, Koa, and MongoDB to serve a RESTful API, and AngularJS to provide the user interface. The frontend and backend have both been written in Typescript.

### Demo ###

You can visit this page for a [Live Demo](http://lupinemoon.co.za) the login credentials can be found [here](#auth-and-credentials)

### How do I get set up? ###

* Install a text editor, e.g. Visual Studio Code is recommended
* Install Node, e.g. brew install node
* Clone the repository
* Install Docker

# Frontend #

The frontend was built using AngularJS.

### Running the project ###

1. Navigate into the frontend folder `cd frontend`
2. Run `npm install / yarn install`
3. Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, alternatively use `npm run build:prod`
4. Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
5. Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
6. Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Generating new Components ###

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Frontend technologies used: ##

### For the application ###

* [AngularJS](https://angular.io/)
* [Angular Material](https://material.angular.io)
* [@ngrx/effects](https://www.npmjs.com/package/@ngrx/effects)
* [@ngrx/entity](https://www.npmjs.com/package/@ngrx/entity)
* [@ngrx/router-store](https://www.npmjs.com/package/@ngrx/router-store)
* [@ngrx/store](https://www.npmjs.com/package/@ngrx/store)
* [@ngrx/store-devtools](https://www.npmjs.com/package/@ngrx/store-devtools)
* [HammerJS](https://www.npmjs.com/package/hammerjs)
* [ngrx-store-freeze](https://www.npmjs.com/package/ngrx-store-freeze)
* [Rxjs](https://www.npmjs.com/package/rxjs)
* [Socket.IO](https://www.npmjs.com/package/socket.io)
* [Typescript](https://www.typescriptlang.org/)

### For testing

* [Jasmine](https://jasmine.github.io/)
* [Karma](https://karma-runner.github.io)
* [Protractor](http://www.protractortest.org/)

# Backend #

The backend is a NodeJS API, built using Koa, Typescript, and MongoDB.

### Running the project ###

1. Navigate into the backend folder `cd backend`
2. Run `npm install / yarn install`
3. Run `docker-compose up`, this will run the container for MongoDB.
4. Run `docker ps` to find the name of the docker container.
5. Run `docker exec -i -t <docker-container-name> /bin/bash` to open a bash in the container, e.g. `docker exec -i -t salespal /bin/bash`
6. Run `npm run build` to compile the typescript into the dist folder.
7. Run `npm start` to run the application.
8. Run `npm run serve:prod` to run the server in a production environment.
9. Run `npm run test:unit` to execute the unit tests.
10. To customize, update the configuration parameters in `./config/default.yml` / `./config/production.yml`  and the docker compose .yml files

### Auth and Credentials ###

The server automatically creates the following test credentials if there are no users in the database:

* Username: `Tester`
* Password: `hello123`

You can use these credentials to execute the `../users/login` api call and retrieve a JWT token.

### Generating new Controllers, Models, Repositories, and Services ###

There is local a generate script available via `npm run`, that will assist in generating new Controllers, Models, Repositories, and Services. For example, if you have a new table called 'Fish' in your database, you can use this command to help generate all of the boilerplate scaffolding required when using the repository pattern:

* Run `npm run generate`
* Select the component that you would like to generate, e.g. `All` will generate a Controller, Model, Repository, and Service
* Provide a name for the component, e.g. `Fish`, if you need to generate a multi-word component please use LetterCasing, e.g. `GoldFish`.

The templates can customized as required in `./src/templates/`

## Backend technologies used: ##

### For the application ###

* [Class Validator](https://www.npmjs.com/package/class-validator)
* [Config](https://www.npmjs.com/package/config)
* [Docker](https://www.docker.com/)
* [Event Dispatch](https://www.npmjs.com/package/event-dispatch)
* [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
* [Koa](https://www.npmjs.com/package/koa)
* [MongoDB](https://www.npmjs.com/package/mongodb)
* [Routing Controllers](https://www.npmjs.com/package/routing-controllers)
* [Socket.IO](https://www.npmjs.com/package/socket.io)
* [Type DI](https://www.npmjs.com/package/typedi)
* [Typescript](https://www.typescriptlang.org/)
* [Type ORM](https://www.npmjs.com/package/typeorm)
* [Swagger JS Doc](https://www.npmjs.com/package/swagger-jsdoc)
* [Winston](https://www.npmjs.com/package/winston)

### For testing

* [Chai](https://www.npmjs.com/package/chai)
* [Mocha](https://www.npmjs.com/package/mocha)
* [Sinon](https://www.npmjs.com/package/sinon)
* [Supertest](https://www.npmjs.com/package/supertest)
* [TS-Mockito](https://www.npmjs.com/package/ts-mockito)
