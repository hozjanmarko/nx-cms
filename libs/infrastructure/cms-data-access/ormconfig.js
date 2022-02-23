var config = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  maxQueryExecutionTime: process.env.TYPEORM_MAX_QUERY_EXECUTION_TIME,
  debug: process.env.TYPEORM_DEBUG ?? false,
  logging: process.env.TYPEORM_LOGGING ?? true,
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN ?? false,
  synchronize: false, // never use synchronize
  entities: ['./src/models/entities/*.entity.{ts,js}'],
  migrations: ['src/migrations/*.{ts,js}'],
  cli: {
    entitiesDir: './src/models',
    migrationsDir: 'src/migrations',
  },
};

console.error(config);

module.exports = config;
