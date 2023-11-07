const {MongoClient }=require("mongodb")
const url="mongodb://127.0.0.1:27017";
const mongoserver =new MongoClient(url);
// const human="Human_Resource"

const connection = async () =>{
    try{
        await mongoserver.connect()
        console.log("connection made sucess");
        
    }
    catch (err) {
        console.log("error during connection with our DB ", err);
    }
}
const database=mongoserver.db("Human_Resource")
module.exports={connection ,database}