# MobiCash Bank API

A simple RESTful API using Node.js and Express with three endpoints: one to create a bank account, one to resolve a bank account, and one to fetch all bank accounts.


## Setup

This section will guide you through the setup process required to get up and running with the application.


### Requirements

-   Node (Version >= 16.14.0)

-   NPM (optional yarn) (Version >= 8.3.0)

-   Mysql (Version >= 8.0)

-   TypeScript (`npm install -g typescript` || `yarn global add typescript`)


### Get Started

1. Clone the project from your account repository.

2. Run `npm install` or `yarn install` from the root directory of the project

3. Create a `.env` file and copy the content of `.env.example` to it.


#### Database Setup

1. Create a new database in mysql

2. Fill the `.env` file you created with the database credentials

3. Run `npm run migrate` to create the tables, You can run `npm run migrate:undo` to undo the last migration or `npm run migrate:undo:all` to undo all migrations


### Development

To run the application, use the command: `npm run start`

Use `development` or `staging` as your node environment

It is important to set up environment variables for the system to function properly


### JSON Payload

1. Add a full name to the payload as account holder's name i.e. `John Doe`

2. Use this format `dd/mm/yyyy` when adding the account holder's date of birth

3. The account types available are `savings`, `checking` and `current`


#### Logging

Sometimes, it's necessary to send logs to the stdout or store them, to do this, make use of the exported [logger](src/utils/logger)

You can log errors based on their levels:

-   error

-   warn

-   info

-   verbose

-   debug

-   silly

Example: `logger.error('You just committed a crime!')`

Ensure you avoid using `console.log` statements anywhere in the code.


#### Environment

Ensure you have eslint and prettier set up on your development environment. Ensure you follow proper linting rules as well. [Here's](https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9) a guide on how to setup eslint on vs code


### Code Standard and Resources
- [Node.js best practices](https://github.com/goldbergyoni/nodebestpractices)
- [Setting up Eslint & Prettier](https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9)
