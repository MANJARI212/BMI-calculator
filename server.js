const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get("/",function(req,res){
    res.sendFile(__dirname +"/bmicalculator.html");
});
app.post("/",function(req,res){
    var num1 = parseFloat(req.body.num1);
var num2 = parseFloat(req.body.num2);
var result = num1/Math.pow(num2,2);
    res.send("The result of the calculation is:"+result);
});
app.listen(4080,function(){
    console.log("server running on port no:4080");
});