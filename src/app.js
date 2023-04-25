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
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu2004@cluster0.wlmjuon.mongodb.net/?retryWrites=true&w=majority');
  
}
app.get("/",(req,res)=>{

res.render("index")




})
app.listen(port,(req,res)=>{


console.log("Running on port 3000")



})
