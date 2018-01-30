const mongoose = require('mongoose');

//Map global Promise
mongoose.Promise = global.Promise;
//Mongoose Connect
mongoose.connect('mongodb://gee:gee@ds029793.mlab.com:29793/pusherpolll')
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));