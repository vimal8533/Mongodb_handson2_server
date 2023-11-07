const { addProductInStore, updatePriceofSingleProduct, Query1, Query2, Query3, Query4, Query5, Query6,  } = require("../controller/product_contrloer");

const route=require("express").Router();




route.post("/addProductInStore",addProductInStore)


route.put("/updateSingleProductPrice",updatePriceofSingleProduct)

route.get("/query1",Query1)
route.get("/query2",Query2)
route.get("/query3",Query3)
route.get("/query4",Query4)
route.put("query5",Query5)
route.patch("query6",Query6)

module.exports=route;