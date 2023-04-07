import pg from 'pg';

const url : string = "postgresql://postgres:pi31415@localhost:5432/poc?schema=public"
const {Pool} = pg;
const db = new Pool({
    connectionString: url
});

export default db;