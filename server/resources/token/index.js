import jwt from 'jsonwebtoken';
import config from '../../config';

export default {
  create(req, res) {
    const { username, password } = req.body;

    /* obviously you would normally do a real look-up here */
    if (username === 'test' && password === 'test') {
      let token = jwt.sign({username: username}, config.secret, {
        issuer: 'redux-demo',
        expiresInSeconds: config.jwtExpiresInMinutes,
      });

      res.status(201).cookie('token', token).send();
    } else {
      res.status(401).send('Authentication failure.');
    }
  },

  delete(req, res) {
    res.status(204).clearCookie('token').send();
  },
}
