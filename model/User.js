const { db, DataTypes } = require('../db');

let User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
});

module.exports = {
  User,
};
