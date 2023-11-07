const { database } = require("../config/db");

// const {human}=require("../config/db")

const employessdata =database.collection("employee");

const addProductInStore=(req,res)=>{
    res.send("add succes")
}
const updatePriceofSingleProduct=(req,res)=>{
    res.send("updates succes")
}
const Query1=async (req,res)=>{
    // const question1="Query the collection employee and list all the documents"
    const data=await employessdata.find({}).toArray();
    // console.log(data)
    // res.send("WHat is Your name")
    res.json(data)
    

    // res.send(data)

}
const Query2=async (req,res)=>{
    const data =await employessdata.find({"salary":{$gt:"30000"}}).toArray();
    res.send(data)

   
}
const Query3=async (req,res)=>{
    const data =await employessdata.find({"overallExp":{$gt:"2"}}).toArray();
    res.send(data)
}
const Query4=async (req,res)=>{
    const data =await employessdata.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}}).toArray();
    res.send(data)
}
const Query5=async (req,res)=>{
    const data =await employessdata.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"65000"}});
    res.send(data)
}
const Query6=async (req,res)=>{
    const data =await employessdata.deleteMany({"lastCompany" : "Y"});
    res.send(data)
}
module.exports={addProductInStore,updatePriceofSingleProduct,Query1,Query2,Query3,Query4,Query5,Query6}