var express = require('express');
var app = express();
var port = 3000;

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

    res.render('users/index',{
        name:matchedUsers
    })
})

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
