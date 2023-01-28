const path = require("path");
const express = require("express");
const hbs = require("hbs")

const app = express();
const port = 8000;

const staticPath = path.join(__dirname,"../public");
const partialsPath = path.join(__dirname,"../partials");

app.use(express.static(staticPath));

app.set("view engine","hbs");

hbs.registerPartials(partialsPath);

app.get("/",(req,res) =>{
    res.render("index.hbs");
});

app.get("/contact",(req,res) =>{
    res.render("contact");
})
app.get("/clients",(req,res) =>{
    res.render("index");
})
app.get("/services",(req,res) =>{
    res.render("index");
})

app.listen(port, () =>{
    console.log(`Listening the port at ${port}`);
});