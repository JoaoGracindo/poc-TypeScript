import { QueryResult } from 'pg';
import db from '../config/database.js';
import { Book, BookEntity } from '../protocols.js';

async function create(book: Book){
    return await db.query(`
        INSERT INTO books
        (name, author)
        VALUES ($1, $2);
    `, [book.name, book.author])
}

async function getAll(): Promise<QueryResult<BookEntity>>{
    return await db.query(`
        SELECT * FROM books;
    `)
}
async function update(id: number){
    return await db.query(`
        UPDATE books
        SET finished=TRUE 
        WHERE id=$1;
    `, [id])
}
async function remove(id: number){
    return await db.query(`
        DELETE FROM books
        WHERE id=$1;
    `, [id])
}

async function checkName(name: string){

    return await db.query(`
        SELECT * FROM books
        WHERE name=$1;
    `, [name])
}

async function checkId(id: number){

    return await db.query(`
        SELECT * FROM books
        WHERE id=$1;
    `, [id])
}

export default {
    create,
    getAll,
    update,
    remove,
    checkId,
    checkName
};
