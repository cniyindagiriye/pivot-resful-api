module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      id_str: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      screen_name: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.TEXT,
      },
      url: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      protected: {
        type: Sequelize.BOOLEAN,
      },
      verified: {
        type: Sequelize.BOOLEAN,
      },
      followers_count: {
        type: Sequelize.INTEGER,
      },
      friends_count: {
        type: Sequelize.INTEGER,
      },
      listed_count: {
        type: Sequelize.INTEGER,
      },
      favourites_count: {
        type: Sequelize.INTEGER,
      },
      statuses_count: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.STRING,
      },
      profile_banner_url: {
        type: Sequelize.STRING,
      },
      profile_image_url_https: {
        type: Sequelize.TEXT,
      },
      default_profile: {
        type: Sequelize.BOOLEAN,
      },
      default_profile_image: {
        type: Sequelize.BOOLEAN,
      },
      withheld_scope: {
        type: Sequelize.STRING,
      },
      derived: {
        type: Sequelize.JSONB,
      },
      withheld_in_countries: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
