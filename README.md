<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript API that returns beauty tags to a user.

## Installation

```bash
# Clone repository
$ git clone https://github.com/arnoldkunihira/beauty_tags.git

# Install required npm modules
$ npm install
```

## Set up your database connection, for this application postgreSQL is configured using docker or locally by creating a file in the root directory called .env.

```bash
Add this to .env file for your own configurations.

SERVER_PORT=<server_port>
MODE=DEV
DB_HOST=<db_host>
DB_PORT=<db_port>
DB_USERNAME=<db_username>
DB_PASSWORD=<db_password>
DB_DATABASE=<db_name>
DB_SYNCHRONIZE=true
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Testing
- Using Swagger API Documentation (Make sure the app is running)
```bash
Copy http://localhost:5000/api/ in your favorite browser and run your tests.

```
- Using Postman which is an API testing tool (This should be installed locally on your computer)


## License

Nest is [MIT licensed](LICENSE).
