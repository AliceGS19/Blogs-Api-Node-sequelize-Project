const User = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'Users',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { timestamps: false },
  );

  users.associate = (models) => {
    users.hasMany(
      models.BlogPosts,
      { as: 'blogposts', foreignKey: 'userId' },
    );
  };
  
  return users;
};
  
module.exports = User;