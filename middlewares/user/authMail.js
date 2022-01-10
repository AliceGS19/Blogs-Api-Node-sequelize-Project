const { getByMail } = require('../../services/user');

module.exports = async (req, res, next) => {
    try {
      const { email } = req.body;
      const regexEmailValidation = /...*@...*\....*/;
      const user = await getByMail(email);
      if (!email) {
        return res.status(400).send({ message: '"email" is required' });
      }
      if (!regexEmailValidation.test(email)) {
        return res.status(400).send({ message: '"email" must be a valid email' });
      }
      if (user) {
        return res.status(409).send({ message: 'User already registered' });
      }
    next();
   } catch (err) {
       next(err);
   }
};