const { getById } = require('../../services/categories');

module.exports = async (req, res, next) => {
    try {
      const { categoryIds } = req.body;  
      const categoriesPromises = categoryIds.map((id) => getById(id));
      const categories = await Promise.all(categoriesPromises);
      const invalidCategory = categories.find((category) => {
          if (category === null) return true;
          return false;
        });
      if (invalidCategory === null) {
          return res.status(400).send({ message: '"categoryIds" not found' });
      }  
    next();
   } catch (err) {
       next(err);
   }
};