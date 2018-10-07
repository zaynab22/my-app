var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://zaynab:zaynab22@ds125453.mlab.com:25453/myapp');
 
module.exports = connection;

