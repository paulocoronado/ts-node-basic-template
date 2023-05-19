## Node.js Basic Project Template

This is a basic Node.js project template with the following features:

* [Express](http://expressjs.com/) web framework
* [Prisma](https://www.prisma.io/) ORM
* Swagger API documentation
* JEST unit testing
* TypeScript support
* CORS support
* supertest for API testing
* estlint for code linting
* jwt authentication via [passport](http://www.passportjs.org/)

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/) - JavaScript runtime

### Installing

Clone the repository:

```
git clone https://github.com/paulocoronado/ts-node-basic-template.git
```

Install dependencies:

```
npm install
```
### Running

Start the server:

```
npm start
```

## Running the tests

Run the tests:

```
npm test
```

In order to run the tests, you need to have files in the `tests` folder with the `.test.ts` extension.

## tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",   
    "outDir": "./dist",     
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,         
    "skipLibCheck": true    
  }
}

```
## package.json

```
{
  "name": "app_name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node dist/index.js",    
    "build": "tsc -p .",
    "dev": "ts-node --watch src/index.ts",
    "docs": "typedoc --entryPointStrategy expand ./src",
    "jsonschema": "prisma generate --generator=jsonSchema",
    "lint": "eslint src/**/*.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.1",
    "@types/node": "^20.2.1",
    "@types/passport-jwt": "^3.0.8",
    "@types/supertest": "^2.0.12",
    "@typescript-eslint/eslint-plugin": "^5.59.6",
    "@typescript-eslint/parser": "^5.59.6",
    "eslint": "^8.40.0",
    "eslint-config-standard-with-typescript": "^34.0.1",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.7.0",
    "eslint-plugin-promise": "^6.1.1",
    "jest": "^29.5.0",
    "prisma": "^4.14.1",
    "supertest": "^6.3.3",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^4.6.3",
    "ts-jest": "^29.1.0",
    "ts-node": "^10.9.1",
    "typedoc": "^0.24.7",
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "@prisma/client": "^4.14.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.1"
  }
}

```