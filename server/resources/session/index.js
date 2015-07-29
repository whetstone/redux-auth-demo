import jwt from 'jsonwebtoken';
import config from '../../config';

export default {
  create(req, res) {
    const { username, password } = req.body;

    /* obviously you would normally do a real look-up here */
    if (username === 'test' && password === 'test') {
      let token = jwt.sign({username: username}, config.secret, {
        issuer: 'redux-demo',
        expiresInMinutes: 60
      });

      res.status(201).cookie('radToken', token).send();
    } else {
      res.status(401).send('Authentication failure.');
    }
  }
}
