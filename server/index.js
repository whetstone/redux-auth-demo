import express from 'express';
import logger from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import config from './config';
import session from './resources/session';

const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));
app.use(errorhandler());

const protect = () => {
  return jwt({secret: config.secret}).unless({path: ['/api/session']});
};

// set up API routing
app.use('/api', protect(), router);
router.post('/session', session.create);

// Handle unauthorized errors gracefully.
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid Token');
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});

export default app;
