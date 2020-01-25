import { NextFunction, Request, Response } from "express"
import { heroes } from "../models/heroes";

const filterByDate = (givenDate: string) => {
    return heroes.filter(hero => hero.date===givenDate)
}
export const getAllHeroes = (req: Request, res: Response, next: NextFunction) => {    
    try {        
        req.query.date
        ? res.status(200).json({ heroes: filterByDate(req.query.date) })
        : res.status(200).json({ heroes });
    } catch (err) {
        console.log(err)
        const error = {status: 404, msg: JSON.stringify(err)};
        next(error)
    }
}