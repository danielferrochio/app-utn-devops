const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
/*
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost:3306',
  dialect: 'mysql'
});
*/
const sequelize = new Sequelize("sqlite::memory");

const app = express();
const port = 3000;

class User extends Model { }

User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

app.get("/", (req, res) => {

  User.findAll().then(data => res.send(data)).catch(error => res.send(error));
})

app.listen(port, () => console.log("Aplicación funcionando en puerto " + port));
