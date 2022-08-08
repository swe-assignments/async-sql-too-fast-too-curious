const { sequelize, Sequelize } = require('../db/db');

let Class = sequelize.define('class', {
  title: Sequelize.STRING,
  startTime: Sequelize.STRING,
});

module.exports = {
  Class,
};
