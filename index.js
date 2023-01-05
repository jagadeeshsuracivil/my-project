const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 4000;                  //Save the port number where your server will be listening
const mysql = require('mysql');

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
const con = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6588164",
    password: "3YHgNyVLEg",
    database:"sql6588164"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM Users_Information", function (err, result, fields) {
        if (err) throw err;
        console.log(JSON.stringify(result));
      });
  });

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
