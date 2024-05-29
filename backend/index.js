//const { urlencoded } = require("express");

const express = require('express');
const app = express();

//mildware 
app.use(express.json());
app.use(express.urlencoded());

//testing server CRUD 
app.get("/", (req,res)=>{
    res.send("Hello world since my server ");
})

//env Variables
const PORT  = process.env.PORT || 8000;


app.listen (PORT,()=> {
    console.log(`server is running on port  : 8000`);
});




