const {Sequelize} = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('distrito_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;