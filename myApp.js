require('dotenv').config()
let express = require('express');
const path = require('path');
let app = express("");

//#7
app.use(function(req,res,next){
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
});

//#2
// app.get("/",function (req,res){
//     res.send("Hello Express")
// });


//#1
// console.log("Hello World!");

//#3
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

//#4
app.use("/public",express.static(__dirname + '/public'));

//#5&6
app.get("/json",(req,res)=>{
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message" : "Hello json"})
    }
    //Another way:
    // const json = { message: "Hello json" };
    // json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase() : json.message;
    // res.json(json);
});

//#8
app.get("/now",function(req,res,next){
    req.time = new Date().toString();
    next();
}, function(req,res){
    res.json({time: req.time});
});





































 module.exports = app;
