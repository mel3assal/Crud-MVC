import express from "express";
import { dbConnection } from "./Database/dbConnection.js";
import { join, resolve } from "path";
import { Product } from "./Database/product.js";
const app = express();
const port = 3000;
dbConnection;
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.post("/addProduct", async (req, res) => { 
    await Product.insertMany(req.body)  
    res.redirect('/')  
});
app.get("/",async (req, res) => {
    let products=await Product.find()
    res.render('index.ejs',{products});
});
app.get("/update/:id",async (req, res) => {
    let product=await Product.findById(req.params.id)
    res.render('update.ejs',{product});
});
app.post("/updateProduct/:id", async (req, res) => { 
    const product=await Product.findByIdAndUpdate(req.params.id,req.body)  
    res.redirect('/')  
});
app.post("/deleteProduct", async (req, res) => { 
    await Product.findByIdAndDelete(req.body.productId)  
    res.redirect('/')  
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
