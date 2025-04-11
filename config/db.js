const {Sequelize} = require('sequelize');

// Connect to the database
// const sequelize = new Sequelize('distrito_db', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// })
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false
    }
  );
  

module.exports = sequelize;