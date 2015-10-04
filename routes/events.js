var express = require('express');
var router = express.Router();


var sample = [
    {
        "company": "Ghost Tours",
        "name": "Ghost Tours - 10% Discount",
        "dates": {
            "Monday": ["15:30", "18:30"],
            "Wednesday": ["11:30", "19:45"],
            "Friday": ["22:00"]
        },
        "discount": 0.1,
        "number": 20,
        "expires": 3

    },
    {
        "company": "Ghost Tours",
        "name": "Ghost Tours - 20% Discount",
        "dates": {
            "Tuesday": ["15:30", "18:30"],
            "Sunday": ["11:30", "19:45"]
        },
        "discount": 0.2,
        "number": 40,
        "expires": 5
    },
    {
        "company": "Family Tours",
        "name": "Family Tours - 20% Discount",
        "dates": {
            "Sunday": ["15:30", "18:30"],
            "Wednesday": ["11:30", "19:45"],
            "Friday": ["22:00"]
        },
        "discount": 0.2,
        "number": 20,
        "expires": 5

    },
    {
        "company": "Family Tours",
        "name": "Family Tours - 30% Discount",
        "dates": {
            "Thursday": ["11:30", "19:45"],
            "Friday": ["22:00"]
        },
        "discount": 0.3,
        "number": 50,
        "expires": 10
    }
];

router.get('/', function (req, res, next) {
      var results=[];
      var pg = require('pg');
    console.log(req.body.name);
DATABASE_URL='postgres://qxvgprniwlpgjm:HbD3NYtAQdFL7xk5eRjzxRZ7eD@ec2-54-83-51-38.compute-1.amazonaws.com:5432/da85113i577oud?ssl=true'

pg.connect(DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  client.query("CREATE TABLE IF NOT EXISTS events(name varchar(64), dates varchar(64),discount float, number int)");
  //client.query("INSERT INTO events(name,dates,discount,number) values($1,$2,$3,$4)",["a","oct",23,4]);
  var query = client.query("SELECT name,dates,discount,number from events");
   query.on('row', function(row) {
      results.push(row);
    });
    query.on('end', function() {
            client.end();
            return res.json(results);
        });

 

});
  });
router.post('/', function (req, res, next) {
console.log("ping from post");
    res.json("success");
});
   

module.exports = router;
