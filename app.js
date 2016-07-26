var express        = require('express');
var morgan         = require('morgan');
var app            = express();


// Front end folder
app.use("/", express.static(__dirname + "/public"));

// Index page
app.get("/*",function (req,res){
  res.sendFile(__dirname + '/public/views/index.html');
});

// Now stay a while, and listen.
app.listen(3000, function(){
  console.log("Rock Paper Stuff is running at " + 3000);
});
