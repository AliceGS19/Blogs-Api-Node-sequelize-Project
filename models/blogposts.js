const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define(
    'BlogPosts',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
  );

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };
  
  return blogPost;
};
  
module.exports = BlogPost;