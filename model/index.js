const { Instructor } = require('./Instructor');
const { Class } = require('./Class');

Class.belongsTo(Instructor);
Instructor.hasMany(Class);

module.exports = {
  Instructor,
  Class,
};
