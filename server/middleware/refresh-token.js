import jwt from 'jsonwebtoken';
import config from '../config';

export default function refreshToken(req, res, next) {
  const { cookies: { token: requestToken } } = req;
  const decodedTokenPayload = jwt.decode(requestToken);
  const { username } = decodedTokenPayload;

  const updatedToken = jwt.sign({username: username}, config.secret, {
    issuer: 'redux-demo',
    expiresInMinutes: config.jwtExpiresInMinutes,
  });

  res.cookie('token', updatedToken);
  next();
}