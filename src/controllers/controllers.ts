import { Request, Response } from "express";
import { Book } from "../protocols.js";
import repositories from "../repositories/repositories.js";
import services from "../services/services.js";

async function create(req: Request, res: Response){

    const book = req.body as Book;
    try{
        await services.create(book);
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

async function getAll(req: Request, res: Response){

    try{
        const {rows: promise} = await repositories.getAll();
        return res.status(200).send(promise);

    }catch(err){
        return res.sendStatus(500);
    }
}
async function update(req: Request, res: Response){

    const {id} = req.params;

    try{
        await services.checkId(id, repositories.update);
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}
async function remove(req: Request, res: Response){

    const {id} = req.params;

    try{
        await services.checkId(id, repositories.remove);
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export default {
    create,
    getAll,
    update,
    remove
};