# Beauty Tags API

A TypeScript API that returns beauty tags to a user and was bootstrapped with [Nest Framework](https://nestjs.com/)

## Installation

```bash
# Clone repository
$ git clone https://github.com/arnoldkunihira/beauty_tags.git

# Install required npm modules
$ npm install
```

## Database Configuration

### Install PostgreSQL locally.

- [PostgreSQL](https://www.postgresql.org/). 

### Install PostgreSQL on Docker.

- [Dockerize PostgreSQL](https://docs.docker.com/samples/postgresql_service/)

### Create and configure your database connection.

```bash
# Create database
$ CREATE DATABASE <db_name>;

# Create a file .env in the application root directory and paste the following with appropriate values
SERVER_PORT=<server_port>
MODE=DEV
DB_HOST=<db_host>
DB_PORT=<db_port>
DB_USERNAME=<db_username>
DB_PASSWORD=<db_password>
DB_DATABASE=<db_name>
DB_SYNCHRONIZE=true
```

## Running the application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## API Testing

- Using [Swagger API Documentation](https://swagger.io/docs/) (Make sure the cloned app is running)

```bash
# Copy this link below in your browser and run your tests. 
$ http://localhost:5000/api/

```
- Using [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download) API testing tools (It is recommended to install them locally on your computer)\
 and one must have experience using the mentioned tools above.


## License

Nest is [MIT licensed](LICENSE).
