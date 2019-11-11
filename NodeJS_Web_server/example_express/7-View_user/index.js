var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var low = require('lowdb');
var shortid = require('shortid');

var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing 

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
    { id: 1, name: 'Khanh' },
    { id: 2, name: 'Quan' }]

// Render file html index.pug
app.get('/', function (req, res) {
    res.render('index', {
        name: 'Khánh'
    });

});

// Render file html users/index.pug
app.get('/users', function (req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });

});

// Search users
app.get('/users/search', function (req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    // Render file html users/index.pug with parameter matchedUsers when search
    res.render('users/index', {
        users: matchedUsers
    });
});

// render file html create.pug
app.get('/users/create', function(req, res){
    res.render('users/create');
});

app.get('/users/:id', function(req, res){
    var id = req.params.id;
    
    var user = db.get('users').find({id: id}).value();

    res.render('users/view',{
        user: user
    });
    
});

//post users
app.post('/users/create', function(req, res){
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
});


app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
