import { Request, Response, NextFunction } from "express";
import { Book } from "../protocols.js";
import { ObjectSchema } from 'joi';

function validateSchema(schema: ObjectSchema){
    return (req : Request, res : Response, next : NextFunction) => {

        const book = req.body as Book;
        const {error} = schema.validate(book, {
            abortEarly: false
        });

        if(!error) next();

        res.status(409).send(error.details.map((obj) => obj.message));
    }
}
export default {validateSchema};