import express from 'express';
import { unhandledMethod } from './errors';
import { getAllHeroes } from './controllers/heroes';

const apiRouter = express.Router();

apiRouter.route('/')
.get(getAllHeroes)
.all(unhandledMethod)


export = apiRouter;

