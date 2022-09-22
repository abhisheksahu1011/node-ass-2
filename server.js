

const express = require("express"); 
const app = express(); 
app.get("/",function(req,res){
    res.send("<h1>Welcome to Express js</h1>")
})
app.get("/api/main",function(req,res){ 
    res.write("<h1>Welcome to Express js page</h1>")
    res.write("This is my first express js server Assignment")
    res.write(JSON.stringify({name:"Express js server creation"}))

res.end();
})

app.listen(3002 ,function(){
    console.log("server is running ");
})