require('dotenv').config();
console.log(process.env.SESSION_SECRET);

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoutes = require('./routes/use.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');

var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing 
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.use(express.static('public'));

// Render file html index.pug
app.get('/', function (req, res) {
    res.render('index', {
        name: 'Khánh'
    });
});

app.use('/users',authMiddleware.requireAuth, userRoutes);
app.use('/auth',authRoute);
app.use('/product',productRoute);
app.use('/cart',cartRoute);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
