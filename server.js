const express = require("express");

const app = express();

// "/" is the route and the function is a callback function
// function(request, respond) often shortend to function(req, res)
// imagine "/" as home page
app.get("/", function(request, respond){
    //console.log(request);
    // respond can send plain text or html
    // server info
    respond.send("<h1> Hello World </h1>");

});

// imagine "/contact" as contact page
app.get("/contact", function(req, res){
     res.send("contact me at email@email.com")
});

app.get("/about", function(req, res){
    res.send("My name is!")
});

app.listen(3000, function(){
    console.log("Server Started on port 3000");
});