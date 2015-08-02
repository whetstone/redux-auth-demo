import jwt from 'jsonwebtoken';
import config from '../../config';

export default {
    read(req, res) {
        const now = new Date().toString();

        res.status(200).send({
            username: 'test',
            lastLogin: now,
        });
    }
}