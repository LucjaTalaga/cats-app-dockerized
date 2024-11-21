let express = require('express');
let path = require('path');
let fs = require('fs');
let cors = require('cors');
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

app.use(express.static(path.join(__dirname, "/")));
app.use(cors());



//mongo client options and credentials
let mongoUrl = "mongodb://admin:password@localhost:27017";
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
let dbName = "my-db";

app.get('/get-cats', function (req, res) {
  let response = {};
  // Connect to the db
  MongoClient.connect(mongoUrl, mongoClientOptions, function (err, client) {
    if (err) throw err;
    else {
      console.log("mongo connection estabilished");
    }

    let db = client.db(dbName);
    // Send response
    res.send(response ? response : {});



  });
});




app.listen(3001, function () {
    console.log("app listening on port 3001!");
});
  
