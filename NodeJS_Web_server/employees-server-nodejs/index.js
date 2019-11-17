require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
var db = mongoose.connection;

db.on('error',console.error.bind(console, 'MongoDB connection error'))

var employeeRoute = require('./routes/employee.route');

var port = parseInt(process.env.PORT);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/employee',employeeRoute);

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});



