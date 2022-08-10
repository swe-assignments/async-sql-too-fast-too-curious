const { db } = require('./db');
const { User } = require('./model/index');

let queryDatabase = async (username, password) => {
  try {
    let userLookup = await User.findOne({
      where: {
        username: username,
      },
    });
    if (userLookup) {
      console.log(userLookup.toJSON());
      return userLookup.toJSON();
    }

    return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { queryDatabase };
