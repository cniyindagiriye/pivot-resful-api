const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Tweet, {
        foreignKey: {
          name: 'userId',
        },
      });
    }
  }
  User.init(
    {
      id_str: DataTypes.STRING,
      name: DataTypes.STRING,
      screen_name: DataTypes.STRING,
      location: DataTypes.TEXT,
      url: DataTypes.TEXT,
      description: DataTypes.TEXT,
      protected: DataTypes.BOOLEAN,
      verified: DataTypes.BOOLEAN,
      followers_count: DataTypes.INTEGER,
      friends_count: DataTypes.INTEGER,
      listed_count: DataTypes.INTEGER,
      favourites_count: DataTypes.INTEGER,
      statuses_count: DataTypes.INTEGER,
      created_at: DataTypes.STRING,
      profile_banner_url: DataTypes.STRING,
      profile_image_url_https: DataTypes.TEXT,
      default_profile: DataTypes.BOOLEAN,
      default_profile_image: DataTypes.BOOLEAN,
      withheld_scope: DataTypes.STRING,

      derived: {
        type: DataTypes.JSONB,
      },
      withheld_in_countries: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false,
    },
  );
  return User;
};
