# Typescript Node/Express Seed
A highly opinionated boilerplate seed app for starting a new Node/Express Server using Typescript.

## About
The purpose of this project is to streamline the process when creating a new RESTful API using Node/Express with Typescript. The developer can get straight ot writing the code that matters without having to setup the initial structure and build processes. This project is highly opinionated and curated to use only specific dependencies to keep it on the lighter side as much as possible. Add your own extras as you see fit.

### Dependencies

   - [NodeJS](https://nodejs.org/en/)
      - Pre-requisite. Written with v10.x+ in mind.
   - [Express](https://expressjs.com/)
      - Web Framework
         - [body-parser](https://www.npmjs.com/package/body-parser)
            - Automatically handles parsing all requests body content and makes it available before your handlers are hit.
         - [dotenv](https://github.com/motdotla/dotenv#readme)
            - Used to parse environment variables during development.
         - [Morgan](https://github.com/expressjs/morgan#readme)
            - HTTP request logger middleware for node.js
         - [Winston](https://github.com/winstonjs/winston#readme)
            - A logger for just about everything.
   - [Typescript](https://www.typescriptlang.org/)
      - Superset of Javascript.
   - [TSLint](https://palantir.github.io/tslint/)
      - An extensible linter for the TypeScript language.

## Setup

   - Use the "Use This Template" button to create a new repo from this project.
   - Clone the new repo to your local machine.
   - `npm install` to install all dependencies.
   - Rename `.env.example` to `.env` and input your own variables.
   - `npm start` to start the app.
   - Smile.

## Contact Me

Have some suggestions or other opinions on how this can be made better or organized better? Feel free to open an issue or contact me via Twitter or Email.

   - [@Dylan_Legendre](https://twitter.com/Dylan_Legendre)
   - [dylanlegendre09@gmail.com](mailto:dylanlegendre09@gmail.com)
