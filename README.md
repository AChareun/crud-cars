# CRUD-Cars

CRUD/ABM operations App for Cars. Done with Express, Nunjucks and SQLite.

Project done in the context of the _[r/argentinaprograma](https://argentinaprograma.com/)_ web development course.

## How to Install and Run the App

- Download the repository.
- Run `npm install` on the project directory.
- Copy and paste the file `.env.dist`, change its name to `.env` and complete the Environment Variables with your own credentials.
- `npm start` to run the App on production mode.

### Other scripts

- `npm run dev` runs the App on development mode, using _Nodemon_.
- `npm run test` runs unit tests with _Jest_ and collects code-coverage data.
- `npm run test:dev` runs unit tests with _Jest_ on watch mode.

## About the App

### To-Do

- [ ] Implement sessions with express
- [ ] More specific Errors
- [ ] ORM and MySql for production
- [ ] Views and scripts for the Frontend with Nunjucks and Bulma

### C4 Model Diagrams

![CRUD-Cars C4L1](./doc/crud-cars-c4l1.png)
![CRUD-Cars C4L2](./doc/crud-cars-c4l2.png)
![CRUD-Cars C4L3](./doc/crud-cars-c4l3.png)
