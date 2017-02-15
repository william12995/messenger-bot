var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var debug = require('debug')('inforann:server');
//var colors = require('colors');
var config = require('./config/config.json');


var userSchema = new mongoose.Schema({
    id : String
  }, 
  {collection: "fb_bot"}
  );

mongoose.model('User', userSchema);



mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, function (err) {
    if (err) {
        console.log("Couldn't connect to mongodb: " );
        console.log("Please check if your setting in 'config.json' is right.");
        console.log("Or, if the mongod is running.");
        throw err;
    } else {
        //debug('Connected to MongoDB server.');
        console.log("Connected !");
    }
});
