import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const url : string = process.env.DATABASE_URL;
const {Pool} = pg;
const db = new Pool({
    connectionString: url
});

export default db;