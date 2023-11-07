
const express= require("express");


const route=require("./Router/product_router");
const { connection } = require("./config/db");
const { employeeData, employedata1, Query1, Query2, Query3, Query4, Query5, Query6 } = require("./controller/product_contrloer");

const app =express();

app.use("/api",route)


app.get("/",(req,res)=>{
    res.send("Home page")
})
app.get("/query1",Query1);
app.get('/query2',Query2)
app.get('/query3',Query3)
app.get('/query4',Query4)
app.put("query5",Query5)
app.patch("query6",Query6)

app.listen(5000,async ()=>{
    try{
        await connection();
        console.log("server is strated after connection")
    }
    catch (err){
        console.log(err,":error is occered  due to server start")
    }
})