# BOOKSTORE REST API
## What is it?
"BOOKSTORE REST API" is a robust and versatile Node.js-based RESTful API designed to streamline the management of a bookstore. This API offers a set of well-defined endpoints, enabling developers to perform essential operations such as creating, retrieving, updating, and deleting books within the bookstore ecosystem.

## Key Features
### 1. User Account Management:
- The API includes endpoints for user account registration ('/register') and login ('/login'), facilitating secure and authenticated access to the system.
### 2. Book Operations:

- Retrieve a comprehensive list of all books (GET /books) to provide users with a snapshot of the available inventory.
- Access detailed information about a specific book by providing its unique identifier (GET /books/:id).
- Add new books to the bookstore seamlessly (POST /books) to keep the inventory up-to-date.
- Update book details (PUT /books/:id) to reflect any changes, ensuring accurate and current information.
- Remove books from the inventory effortlessly (DELETE /books/:id), maintaining a well-maintained and organized bookstore catalog.

## Dependencies
- express: ^4.18.2
- pg: ^8.11.3
- pg-hstore: ^2.3.4
- sequelize: ^6.35.0
- bcryptjs: ^2.4.3
- dotenv: ^16.3.1
- jsonwebtoken: ^9.0.2
- nodemon: ^3.0.1
- sequelize-cli: ^6.6.2

## Getting Started
#### 1. Installation
To install the required dependencies, run the following command:

```sh
npm install
```
#### 2. Configuration
Configure your database connection in the `config/config.js` file.

#### 3. Migration
Run the migration to set up the database:

```sh
npx sequelize-cli db:migrate
```

#### 4. Run Server
Start the server:
```sh
npm start
```
The API will be accessible at `http://localhost:3000`.

## Endpoints
| Method | Path | Response | Authorized |
| --- | --- | --- | --- |
| POST | /register | User account register. | - |
| POST | /login | User account login. | - |
| GET | /books | Get a list of all books. | - |
| GET | /books/:id | Get details of a specific book. | customer |
| GET | /admin/books/:id | Get details of a specific book. | admin |
| POST | /admin/books | Add a new book to the bookstore. | admin |
| PUT | /admin/books/:id | Update details of a specific book. | admin |
| DELETE | /admin/books/:id | Delete a specific book. | admin |

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
- Create some routes
- Create some controllers
- Create some helpers
- Create some middlewares
