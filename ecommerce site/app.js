const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use(express.static(__dirname + '/public'));

//index.html
app.get('/', function(req, res) {
  res.sendFile('/index.html'); 
});

/*
//just for testing post
app.post('/ping', function (req, res) {
  console.log(req.body);
  //res.send(req.body)
})

//just for testing get 
app.get('/ping', function (req, res) {
    console.log(req.params);
    //res.send(req.params)
})


//just for testing get with params
app.get('/ping/:data', function (req, res) {
    console.log(req.params);
    //res.send(req.params)
})
*/


/*
logic to parse serch query and
process get data from the database
*/

app.get('/getproduct/:product',(req,res)=>{
    console.log(req.params.product);
    res.sendFile(__dirname+'/public/catalog.json')
})



//port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})