var pg = require('pg');
DATABASE_URL='postgres://qxvgprniwlpgjm:HbD3NYtAQdFL7xk5eRjzxRZ7eD@ec2-54-83-51-38.compute-1.amazonaws.com:5432/da85113i577oud?ssl=true'

pg.connect(DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  client.query("CREATE TABLE IF NOT EXISTS evs(firstname varchar(64), lastname varchar(64))");
  var query = client.query("SELECT firstname, lastname FROM evs ORDER BY lastname, firstname");
   query.on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
