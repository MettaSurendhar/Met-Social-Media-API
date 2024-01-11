# MET_SOCIAL_HANDLER

### This API is built using Node.js, Express.js, Prisma, and PostgreSQL.

## File Structure

Our project is organized into several key directories:

- **Controllers**: This directory contains the logic for handling requests and responses. It's where we define our app's behavior in response to user actions.
- **Routes**: This directory is responsible for routing the app's requests to the correct controller functions.
- **Models**: This directory contains the data models for our app. These models define the structure of our data and interact with the database.
- **Utilities**: This directory contains various utility functions and helpers that are used throughout the app.
- **Services**: This directory contains business logic, or code that isn't directly related to receiving requests and sending responses.
-  **app.js**: This is the main file that starts our server and contains the middleware for our app.
-  **server.js**: This file is responsible for setting up and starting our Express server.
-  **schema**: This directory contains the Prisma schema file, which defines our database schema and models.

I hope this gives you a clear understanding of our project's structure and the technologies used. If you have any questions, feel free to ask.

## Getting Started with Installation and Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js installed on your machine. If not, you can download it from (https://nodejs.org/en/download/).

### Installation

1. Clone the repository
```bash
https://github.com/MettaSurendhar/Met-Social-Media-API.git
```
2. Navigate into the project directory
```bash
cd Met-Social-Media-API
```
3. Install the project dependencies
```bash
npm install
```
or else try 
```bash
npm install --force
```
The `npm install` command is used to install all the project dependencies listed in the `package.json` file. It downloads the packages and their respective versions and saves them in the `node_modules` directory.

### Database Setup

This project uses Prisma as an ORM and PostgreSQL as the database. To set up the database, you need to update the `.env` file with your database link.

The `.env` file is a type of configuration file in Node.js that allows you to store environment variables. In this project, it's used to store the database connection string.

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

Replace `user`, `password`, `localhost`, `5432`, and `mydb` with your PostgreSQL credentials and database name.

### Pushing Changes to the Database

To push changes to the database, you can use the `npm db-push` command.

```bash
npm db-push
```

The `npm db-push` command is a Prisma command that updates the database schema to match the Prisma schema. It's useful for prototyping and local development but should be used with caution in production.

### Starting the Server

To start the server, use the `npm start` command.

```bash
npm start
```

The `npm start` command is a predefined script in the `package.json` file that starts the application. In this project, it starts the Node.js server.

## API Endpoints

The API provides several endpoints for managing social media data. For detailed information about the endpoints, refer to the API documentation.
All the endpoints are available in our Postman public workspace. Here is the <a href="https://www.postman.com/sigma-blue/workspace/sigma-blue-workspace/collection/26578567-8e8935ec-40d0-4c56-b1d8-b35e4094a037?action=share&creator=26578567"> postman link </a>

## Contribution

We encourage everyone to contribute to our project. Here's how you can do it:

- **Fork the repository on GitHub**
- **Clone the forked repository**
- **Create a new branch**
- **Make your changes**
- **Commit and push your changes**
- **Create a Pull Request**
- **Code Review**
- **Merge**

After the code review, your changes will be merged into the main codebase.We appreciate your contributions and look forward to seeing your work!

## Contributing

Contributions are welcome. Please read the contributing guide for more information.

## License

This project is licensed under the MIT License.

