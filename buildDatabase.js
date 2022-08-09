const { db } = require('./db');
const { Instructor, Class } = require('./model/index');

let buildDatabase = async () => {
  try {
    await db.query('DROP TABLE IF EXISTS users');

    await db.query('CREATE TABLE IF NOT EXISTS users (user TEXT, password TEXT, city TEXT)');
    await db.query('INSERT INTO users VALUES ("Homer", "doh", "Springfield")');
    await db.query('INSERT INTO users VALUES ("Marge", "hmmm", "Springfield")');
    await db.query('INSERT INTO users VALUES ("Bart", "donthaveacow", "Springfield")');
    await db.query('INSERT INTO users VALUES ("Lisa", "LisaNeedsBraces", "Springfield")');
    await db.query('INSERT INTO users VALUES ("Maggie", "thisisindeedadisturbinguniverse", "Springfield")');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { buildDatabase };
