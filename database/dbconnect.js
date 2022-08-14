const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connected to database successfully.");
}).catch((error) => {
    console.log("Fail at connecting to the database.")
});