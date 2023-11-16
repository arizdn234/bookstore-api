# BOOKSTORE REST API
## What is it?
"BOOKSTORE REST API" is a Node.js-based RESTful API for managing a bookstore. It provides endpoints for creating, retrieving, updating, and deleting books in a bookstore.

## Requirements
- express: ^4.18.2
- pg: ^8.11.3
- pg-hstore: ^2.3.4
- sequelize: ^6.35.0
- nodemon: ^3.0.1
- sequelize-cli: ^6.6.2

## Installation
To install the required dependencies, run the following command:

```sh
npm install
```

## Getting Started
1. Configure your database connection in the `config/config.js` file.

2. Run the migration to set up the database:

```sh
npx sequelize-cli db:migrate
```

3. Start the server:
```sh
npm start
```
The API will be accessible at `http://localhost:3000`.

## Endpoints
| Method | Path | Response |
| --- | --- | --- |
| GET | /books | Get a list of all books. |
| GET | /books/:id | Get details of a specific book. |
| POST | /books | Add a new book to the bookstore. |
| PUT | /books/:id | Update details of a specific book. |
| DELETE | /books/:id | Delete a specific book. |

---
---
---

## Build Step
Visit the docs [Sequelize Documentation](https://sequelize.org/docs/v6/)
### Setup & Configuration project
1. Initialize npm
```sh
    npm init
```

2. Install dependecies
```sh
    npm install
```

3. Initialize Sequelize-cli
```sh
    npx sequelize-cli init
```

4. Setup your database config in config.json files

6. Generate model
```sh
    npx sequelize-cli model:generate --name Book --attributes title:string,author:string,stock:number
```

7. Migrate model
```sh
    npx sequelize-cli db:migrate
```

8. Generated seed
```sh
    npx sequelize-cli seed:generate --name default-book
```

9. Create some seed

10. Migrate seed
```sh
    npx sequelize-cli db:seed:all
```


### Setup & Configuration app
- Create routes
- Create controllers
