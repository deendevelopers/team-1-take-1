import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
// import expressValidator from 'express-validator';
import router from './router';
import {handleErrors} from './errors';

const app = express();
app.use(cors());
app.options('*', cors());

const { PORT = 9090 } = process.env;

// define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );

app.use(bodyParser.json());
// app.use(expressValidator());

app.use('/api', router)

app.all('/*', (req, res, next) => {
  const incorrectRoute = req.params['0'];
  const err = {
    status: 404,
    msg: `Unhandled route error! ${incorrectRoute}`,
  };
  next(err);
});

app.use(handleErrors);

// start the Express server
app.listen( PORT, () => {
  console.log( `server started at http://localhost:${ PORT }` );
} );

module.exports = app;