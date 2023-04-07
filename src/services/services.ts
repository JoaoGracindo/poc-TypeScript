import { Book } from "../protocols.js";
import repositories from "../repositories/repositories.js";


async function create(book: Book){

    const {rowCount} = await repositories.checkName(book.name);
    if(rowCount) throw new Error("Ja existe livro com esse nome");

    repositories.create(book);
}

async function checkId(id, action: Function){

    const {rowCount} = await repositories.checkId(id);
    if(!rowCount) throw new Error("not found");

    action(id);
}

export default {
    create,
    checkId
};