# Nutrition Label API (Nutrition App B/E)

Back-end for Nutrition App

## Installation and Setup

#### Getting Started

- `git clone` from `repo-name`
- `cd app`
- `touch .env`
- fill out _.env file_ (see below)

#### Server Setup & .env file

This project uses PostgreSQL; to develop locally, you'll have to install and setup PostgreSQL. You can learn about setting up here: [Setup PostgreSQL with Sequelize in Express Tutorial](https://www.robinwieruch.de/postgres-express-setup-tutorial). After you have created a database and a database user, fill out the environment variables in the _app/.env_ file.

```
PGDATABASE=databasename
PGUSER=postgres
PGPASSWORD=postgres
PGHOST=localhost
```

The `SECRET` is just a random string for your authentication. Keep all these information secure by adding the _.env_ file to your _.gitignore_ file. No third-party should have access to this information.

You'll also need Redis setup; learn more [here](https://redis.io/topics/quickstart). Ensure you fill out your env varibles:

```
REDISPORT=6379
REDISHOST=localhost
```

## Server

The server uses Node/Express interfacing with PostgreSQL using Sequelize and GraphQL, with the caching layer using Redis.

#### OAuth Setup

- get OAuth 2.0 tokens from any provider
- set tokens in app/src/config files

#### Start Local Development

- start PostgreSQL database (supply process.env variables to configure for local dev)
- start Redis server (supply process.env variables to configure for local dev)
- `npm run start:dev`
- `http://localhost:8000` is now up for REST requests
- visit `http://localhost:8000/graphql` for GraphQL playground
