const express=require('express');
const port=process.env.port || 3000;
const app=express();
const path=require('path');
const hbs=require('hbs');
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended: false}));
app.use(express.static(mypublic));
app.set("view engine","hbs");
hbs.registerPartials(mypartials)
app.get("/",(req,res)=>{

res.render("index")

})

app.get("/men",(req,res)=>{
res.render("men")
})



app.get("/women",(req,res)=>{
res.render("women")
})

app.get("/kid",(req,res)=>{
    res.render("kid")
})







app.listen(port,(req,res)=>{

console.log("Running on port 3000")



})
