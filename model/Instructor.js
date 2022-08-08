const { sequelize, Sequelize } = require('../db/db');

let Instructor = sequelize.define('instructor', {
  name: Sequelize.STRING,
  classesLed: Sequelize.STRING,
});

module.exports = {
  Instructor,
};
