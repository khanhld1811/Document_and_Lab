var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/**
 * Dữ liệu người dùng chuyển lên được parser và lưu vào req.body
 */
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing 

var port = 3000;

/////////////////////////////////////////////////////////////////

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
    { id: 1, name: 'Khanh' },
    { id: 2, name: 'Quan' }]

app.get('/', function (req, res) {
    /**
     * render(path, object(key-value))
     */
    res.render('index', {
        name: 'Khánh'
    });

});

app.get('/users', function (req, res) {
    res.render('users/index', {
        users: users
    });

});

app.get('/users/search', function (req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function (user) {
        /**
         * Nếu không tìm thấy name trả về -1 và ngược lại
         */
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users: matchedUsers
    });
});

////////////////////////////////////////////////////////

app.get('/users/create', function(req, res){
    res.render('users/create');
});

app.post('/users/create', function(req, res){
    users.push(req.body);
    res.redirect('/users');
});

//////////////////////////////////////////

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
