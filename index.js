// index.js

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
////////////////////////////////////////////////////////////////////////////////
//Db setting
var databaseURL = 'mongodb://localhost:27017/board';
var db = mongoose.connect(databaseURL).connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB error :" , err);
});
db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
///////////////////////////////////////////////////////////////////////////////
// Other setting
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
////////////////////////////////////////////////////////////////////////////////
//Route
app.use("/", require("./routes/home"));
////////////////////////////////////////////////////////////////////////////////
//Port setting
app.listen(3000, function(){
 console.log("server on!");
});
