var pg = require('pg');
DATABASE_URL='postgres://qxvgprniwlpgjm:HbD3NYtAQdFL7xk5eRjzxRZ7eD@ec2-54-83-51-38.compute-1.amazonaws.com:5432/da85113i577oud?ssl=true';

pg.connect(DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
   client.query("DELETE FROM eventsF WHERE id=3");
});
