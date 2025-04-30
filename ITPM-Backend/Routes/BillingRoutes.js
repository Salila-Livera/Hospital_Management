const express = require("express");
const router = express.Router();
//Insert Model
 const Billing = require("../Model/BillingModel");
 //Insert Billing Controller
 const BillingController = require("../Controllers/BillingControllers");

 router.get("/", BillingController.getAllBilling );
 router.post("/", BillingController.addBilling );
 router.get("/id", BillingController.getByID );
 // export
 module.exports = router;
