//mongodb+srv://<db_username>:<db_password>@cluster0.41pem.mongodb.net//
//8fKtsJLWMm0vfSwO//
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/BillingRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use("/billing",router);


mongoose.connect("mongodb+srv://admin:8fKtsJLWMm0vfSwO@cluster0.41pem.mongodb.net/")
.then(()=>console.log("connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));
