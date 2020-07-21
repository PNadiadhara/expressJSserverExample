const express = require("express");

const app = express();

// "/" is the root and the function is a callback function
app.get("/", function(request, respond){
    console.log(request);

});

app.listen(3000, function(){
    console.log("Server Started on port 3000");
});