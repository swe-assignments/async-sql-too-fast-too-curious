const { db } = require('./db');
// const { Instructor, Class } = require('./model/index');

let queryDatabase = async (username, password) => {
  try {
    let userLookup = await db.query(`SELECT * FROM users WHERE user = "${username}"`);
    if (userLookup[0].length) {
      console.log(userLookup[0][0]);
      let { user, city } = userLookup[0][0];
      let payload = {
        user: user,
        city: city,
      };
      console.log(payload);
      return payload;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { queryDatabase };
