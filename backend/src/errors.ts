import { NextFunction, Request, Response } from "express"

export const unhandledMethod = (req: Request, res: Response, next: NextFunction) => {
    console.log('unhandledMethod')
    res.status(405).json({ status: 405, msg: 'The method is not handled for this route' });
};
  
export const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status).send(err);
};