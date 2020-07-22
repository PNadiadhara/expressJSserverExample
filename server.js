const express = require("express");

const app = express();

// "/" is the root and the function is a callback function
// function(request, respond) often shortend to function(req, res)
app.get("/", function(request, respond){
    //console.log(request);
    // respond can send plain text or html
    // server info
    respond.send("<h1> Hello World </h1>");

});

app.listen(3000, function(){
    console.log("Server Started on port 3000");
});