import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg;

/* const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} */

const dataConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
}

const connection = new Pool(dataConfig);

export { connection };
