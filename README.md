[![fr](https://img.shields.io/badge/Langage-FR-red.svg)](https://github.com/Maxime41/projetexpress/blob/main/README.fr.md)

# ExpressJS API with Sequelize and Passport

An API made with ExpressJS, the Sequelize ORM for database management and Passport (passport-jwt) for authentication.

## Requirements

- :small_blue_diamond: Node.js installed
- :small_blue_diamond: Npm packages: Run `npm install` to install dependencies.
- :small_blue_diamond: Create a `.env` file with a `JWT_SECRET` key. You can generate the key with the following command (after running `node`) : `require('crypto').randomBytes(64).toString('hex')`.
- :small_blue_diamond: Database service (e.g., MySQL) like the one provided by XAMPP.
- :small_blue_diamond: Create a database named `projetexpress` and import [the exported database here (SQL)](https://github.com/Maxime41/projetexpress/blob/main/projetexpress.sql).
- :small_blue_diamond: Default driver installed is mariaDB, [Sequelize doc if you need another one](https://sequelize.org/docs/v6/getting-started/).
- :small_blue_diamond: Start the project `npm start`.

## Project Structure

```
projetexpress
├── public
│   ├── uploaded images
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
├── home.js (main file)
├── passport.js
└── sequelize-config.js
```

## Routes

For detailed examples and testing of the API routes, refer to the Postman collection available :arrow_forward: :ballot_box_with_check: [here](https://documenter.getpostman.com/view/33186430/2sA2rFTLdN). :arrow_backward:

**Note:** All routes requiring a token will fail if the user is banned (including users routes).  
In Postman, for routes that require a token, add an `Authorization` key with the value `Bearer <token>` in the Headers tab.

- `/test`: Returns "Hello".
- `/login`: Returns a valid token if the entered credentials are valid.
  - Method: POST
  - Body: JSON object with `nickname` and `password` fields.
- `/register`: Creates a new user with the provided information.
  - Method: POST
  - Body: JSON object with `firstName`, `lastName`, `email`, `nickname`, and `password` fields.
- `/profil`: Returns user information based on the provided nickname.
  - Method: GET
  - Params: `nickname`
  - Require token
- `/add-file`: Uploads a file to the public folder.
  - Method: POST
  - Body: Form-data with a `file` key containing an image (PNG, JPEG, or PDF).
  - Require token

## User Routes

- :question: All requires a token and admin rights
- `/users/rm/:userId`: Deletes a user from the database, method : DELETE.
- `/users/ban/:userId`: Blocks a user from accessing any routes, method : PUT.
- `/users/list`: Lists all users, method : GET.
- `/users/up/:userId`: Promotes a user to admin, method : PUT.
- `/users/down/:userId`: Demotes a user from admin status, method : PUT.
