const { db } = require('.');
const { User } = require('../model');

let buildDatabase = async () => {
  try {
    await db.sync({ force: true });
    await User.create({
      username: 'Homer',
      password: 'anykey',
      city: 'Springfield',
      state: 'Yes!',
    });
    await User.create({
      username: 'Marge',
      password: 'foilage',
      city: 'Springfield',
      state: 'Yes!',
    });
    await User.create({
      username: 'Bart',
      password: 'buymebonestorm',
      city: 'Springfield',
      state: 'Yes!',
    });
    await User.create({
      username: 'Lisa',
      password: 'credenza',
      city: 'Springfield',
      state: 'Yes!',
    });
    await User.create({
      username: 'Maggie',
      password: 'adisturbinguniverse',
      city: 'Springfield',
      state: 'Yes!',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { buildDatabase };
