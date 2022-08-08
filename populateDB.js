const { sequelize } = require('./db/db');
const { Instructor, Class } = require('./model/index');

let populateDB = async () => {
  try {
    await sequelize.sync({ force: true });
    // let jordan = await Instructor.create({ name: 'Jordan', classesLed: '' });
    // let myClass = await Class.create({ title: 'Mindfulness: Stop and Sync', startTime: '9:30am' });
    // await jordan.addClass(myClass);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { populateDB };
