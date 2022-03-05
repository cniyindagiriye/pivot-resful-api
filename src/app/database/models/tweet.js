const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tweet.belongsTo(models.User, {
        as: 'user',
        foreignKey: {
          name: 'userId',
        },
      });
    }
  }
  Tweet.init(
    {
      created_at: { type: DataTypes.STRING },
      id_str: { type: DataTypes.STRING },
      text: { type: DataTypes.STRING },
      source: { type: DataTypes.STRING },
      truncated: { type: DataTypes.BOOLEAN },
      in_reply_to_status_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      in_reply_to_status_id_str: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      in_reply_to_user_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      in_reply_to_user_id_str: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      in_reply_to_screen_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.BIGINT,
        foreignKey: true,
        allowNull: false,
      },
      coordinates: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      place: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      quoted_status_id: { type: DataTypes.STRING },
      quoted_status_id_str: { type: DataTypes.STRING },
      is_quote_status: { type: DataTypes.BOOLEAN },
      quoted_status: { type: DataTypes.JSONB },
      retweeted_status: { type: DataTypes.JSONB },
      quote_count: { type: DataTypes.INTEGER },
      reply_count: { type: DataTypes.INTEGER },
      retweet_count: { type: DataTypes.INTEGER },
      favorite_count: { type: DataTypes.INTEGER },
      entities: { type: DataTypes.JSONB },
      extended_entities: { type: DataTypes.JSONB },
      favorited: { type: DataTypes.BOOLEAN },
      retweeted: { type: DataTypes.BOOLEAN },
      possibly_sensitive: { type: DataTypes.BOOLEAN },
      filter_level: { type: DataTypes.STRING },
      lang: { type: DataTypes.STRING },
      matching_rules: { type: DataTypes.JSONB },
    },
    {
      sequelize,
      modelName: 'Tweet',
      timestamps: false,
    },
  );
  return Tweet;
};
