let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

//mongo client options and credentials
let mongoUrl = "mongodb://admin:pass@mongodb";
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };




app.listen(3001, function () {
    console.log("app listening on port 3001!");
});
  
