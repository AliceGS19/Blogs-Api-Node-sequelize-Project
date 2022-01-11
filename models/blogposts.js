// Campos createdAt e updatedAt referenciando os respectivos fields sugeridos pelo colega Ryan Liber, numa thread do slack

const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define(
    'BlogPosts',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      createdAt: { field: 'published', type: DataTypes.DATE },
      updatedAt: { field: 'updated', type: DataTypes.DATE },
    },
  );

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };
  
  return blogPost;
};
  
module.exports = BlogPost;