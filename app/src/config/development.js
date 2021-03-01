const {
  NODE_PORT, //
  PGDATABASE,
  PGHOST,
  PGUSER,
  PGPASSWORD
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
  OAUTH_CLIENT_ID: '621563373373-gfp53td2o2cu5e8vufe2nmcnlg30l8mn.apps.googleusercontent.com',
  OAUTH_CLIENT_SECRET: 'Fij9PCZhAJqx1Y3LaDMnRIH5',
  OAUTH_CALLBACK_URL: 'http://localhost:8000/login/callback'
}
