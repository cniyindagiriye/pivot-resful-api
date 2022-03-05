module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tweets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      created_at: { type: Sequelize.STRING },
      id_str: { type: Sequelize.STRING },
      text: { type: Sequelize.STRING },
      source: { type: Sequelize.STRING },
      truncated: { type: Sequelize.BOOLEAN },
      in_reply_to_status_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      in_reply_to_status_id_str: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      in_reply_to_user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      in_reply_to_user_id_str: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      in_reply_to_screen_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userId: {
        type: Sequelize.BIGINT,
        foreignKey: true,
        allowNull: false,
      },
      coordinates: {
        type: Sequelize.JSONB,
      },
      place: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      quoted_status_id: { type: Sequelize.STRING },
      quoted_status_id_str: { type: Sequelize.STRING },
      is_quote_status: { type: Sequelize.BOOLEAN },
      quoted_status: { type: Sequelize.JSONB },
      retweeted_status: { type: Sequelize.JSONB },
      quote_count: { type: Sequelize.INTEGER },
      reply_count: { type: Sequelize.INTEGER },
      retweet_count: { type: Sequelize.INTEGER },
      favorite_count: { type: Sequelize.INTEGER },
      entities: { type: Sequelize.JSONB },
      extended_entities: { type: Sequelize.JSONB },
      favorited: { type: Sequelize.BOOLEAN },
      retweeted: { type: Sequelize.BOOLEAN },
      possibly_sensitive: { type: Sequelize.BOOLEAN },
      filter_level: { type: Sequelize.STRING },
      lang: { type: Sequelize.STRING },
      matching_rules: { type: Sequelize.JSONB },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tweets');
  },
};
