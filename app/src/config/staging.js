const { NODE_PORT, PGDATABASE, PGHOST, PGUSER, PGPASSWORD, REDIS_PORT, REDIS_HOST } = process.env

export default {
  PORT: NODE_PORT || 4000,
  ENV: 'staging',

  // CORS
  CORS_ORIGINS: [],

  // PostgreSQL
  DB_NAME: PGDATABASE || 'postgres',
  DB_HOST: PGHOST,
  DB_USER: PGUSER,
  DB_PASSWORD: PGPASSWORD,

  // Routes
  GRAPHQL_ROUTE: '/graphql',

  // Redis
  REDIS_PORT: REDIS_PORT || 6379,
  REDIS_HOST: REDIS_HOST,
  REDIS_TTL: 300,

  // OAuth
  OAUTH_CLIENT_ID: '',
  OAUTH_CLIENT_SECRET: '',
  OAUTH_CALLBACK_URL: 'http://localhost:8000/login/callback'
}
