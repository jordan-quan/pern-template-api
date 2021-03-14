const {
  NODE_PORT, //
  PGDATABASE,
  PGHOST,
  PGUSER,
  PGPASSWORD,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_CALLBACK_URL
} = process.env

export default {
  PORT: NODE_PORT || 8000,
  ENV: 'development',

  // CORS
  CORS_ORIGINS: ['http://localhost:4000', 'http://localhost:5000'],

  // PostgreSQL
  DB_NAME: PGDATABASE || 'postgres',
  DB_HOST: PGHOST || 'localhost',
  DB_USER: PGUSER || undefined,
  DB_PASSWORD: PGPASSWORD || undefined,

  // Routes
  GRAPHQL_ROUTE: '/graphql',

  // Redis
  REDIS_PORT: 6379,
  REDIS_HOST: 'localhost',
  REDIS_TTL: 10,

  // OAuth
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_CALLBACK_URL: `http://localhost:8000/${OAUTH_CALLBACK_URL}`
}
