require('dotenv').config()
let express = require('express');
const path = require('path');
let app = express("");
// app.get("/",function (req,res){
//     res.send("Hello Express")
// });
// console.log("Hello World!");
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'))
})
app.use("/public",express.static(__dirname + '/public'));

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



































 module.exports = app;
