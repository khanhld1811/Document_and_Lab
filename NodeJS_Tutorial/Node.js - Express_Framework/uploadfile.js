var express = require('express');
var app = express();

// multer object creation
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads/')
    },
    filename: function(req, file , cb){
        cb(null, file.originalname)
    }
})

var upload = multer({storage: storage})

/*GET home page. */
app.get('/',function(req, res, next){
    res.render('index2', {title: 'Express'});
});

app.post('/',upload.single('imageupload'),function(req, res){
    res.send("File upload successfully.");
});

app.listen(3000);
console.log("Port 3000");
