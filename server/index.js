import express from 'express';
import logger from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import config from './config';
import * as middleware from './middleware';
import token from './resources/token';
import user from './resources/user';

const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
  origin: true, // TODO: Configure allowed origins
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));
app.use(errorhandler());

const protect = () => {
  return expressJwt({
    secret: config.secret,
    getToken: function (req) {
      return req.cookies.token;
    },
  }).unless({path: ['/api/token']});
};

// set up API routing
app.use('/api', protect(), router);
router.post('/token', token.create);
router.delete('/token', token.delete);
router.get('/user', middleware.refreshToken, user.read);

// Handle unauthorized errors gracefully.
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid Token');
  }
});

app.use(function (req, res, next) {

});

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});

export default app;
