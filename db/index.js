// refactor this with Mongo
var mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect(
  'mongodb://localhost',
  {useNewUrlParser: true , useUnifiedTopology: true },
  () => console.log('Connected to Mongo!') );

const schema = new Schema({
  id: Number,
  name: String,
  quantity: Number
});

const Groceries = mongoose.model('Grocery', schema);

module.exports.Groceries = Groceries;