import utils from '../utils/index.js';

export default (req, res, next) => {
    const { name } = req.body;
    if(name) return next();
    else throw new utils.ClientError('No hay nombre', 401);
};