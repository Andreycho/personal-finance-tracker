const { DataSource } = require('typeorm');
require('dotenv').config();

module.exports = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/**.entity{.ts,.js}'],
  migrations: ['dist/**/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  // logging: 'all',
});
