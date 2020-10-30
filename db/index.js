// refactor using sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Groceries', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

User.sync();

module.exports.User = User;