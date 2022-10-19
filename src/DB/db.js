import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const dataConfig={
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
}

const connection = new pg.Pool(dataConfig)

export {connection};