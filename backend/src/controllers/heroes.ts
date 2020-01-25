import { NextFunction, Request, Response } from "express"
import { heroes } from "../models/heroes";

export const getAllHeroes = async (req: Request, res: Response, next: NextFunction) => {
    try {        
        res.status(200).json({ heroes });
    } catch (err) {
        console.log(err)
        const error = {status: 404, msg: JSON.stringify(err)};
        next(error)
    }
}