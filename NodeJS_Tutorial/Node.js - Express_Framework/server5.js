var express = require('express');
const app = express();

var multer = require('multer');
var upload = multer({dest: 'uploads/'});
const port = 3000;

app.get('/',(req, res)=>{
   res.send('hello men');
});

app.post('/single',upload.single('profile'), (req, res) => {
   try{
      res.send(req.file);
   }
   catch(err){
      res.send(400);
   }
});

app.listen(port, ()=>{
   console.log('listening to the port: ' + port);
})