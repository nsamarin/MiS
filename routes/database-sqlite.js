var sqlite3 = require('sqlite3').verbose();  
var db = new sqlite3.Database('abcd');  
  
db.serialize(function() {  
  db.run("CREATE TABLE if not exists eventsTest (id INTEGER PRIMARY KEY, company_name TEXT,event_name TEXT, discount REAL, date TEXT, min_number INT, expiration TEXT)");  
  
  var stmt = db.prepare("INSERT INTO eventsTest(company_name,event_name,discount,date,min_number, expiration) VALUES (?,?,?,?,?,?)");   
  var a="Ghost Tour"; 
  var b="Ghost Tour 2";
  var c=0.1;
  var d="Mon 6th Oct 00:00";
  var e=10;
  var f="Tue 7th Oct"; 
  stmt.run(a,b,c,d,e,f);   
  stmt.finalize();  
 /* var stmt2=db.prepare("DELETE FROM eventsTest");
  stmt2.run();
  stmt2.finalize(); */
  db.each("SELECT id, company_name,event_name,discount,date,min_number, expiration FROM EventsTest", function(err, row) {  
     console.log("Events: : "+row.id,row.company_name, row.event_name,row.discount,row.date,row.min_number,row.expiration);  
  });  
});  
  
db.close();  


