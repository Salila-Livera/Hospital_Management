const Billing = require("../Model/BillingModel"); // Correct relative path

const getAllBilling = async (req, res, next) => {
    let billing;
    try {
        billing = await Billing.find(); // Use the model "Billing" here
    } catch (err) {
        console.log(err);
    }
    
    // If not found
    if (!billing) {
        return res.status(404).json({ message: "Billing not found" });
    }
    
    // Display
    return res.status(200).json({ billing }); // Use "billing" here
};
//data insert
const addBilling = async (req ,res , next)=>{
   const {name, gmail,age,} = req.body;
   let billing;
   try {
    billing = new billing({name,gmail,age});
    await billing.save();
   }catch (err){
    console.log(err);
   }
   //not insert billing
   if (!billing){
    return res.status(404).send({message:"unable to add billing"});
   }
   return res.status(200).json({Billing});
}
//get by Id
const getByID = async (req , res , next)=>{
    const id = req.params.id;
    let billing;
    try{
        billing =await Billing.findById(id);
    }catch (err){
        console.log(err);
    }
 //not availlable billing
 if (!billing){
    return res.status(404).send({message:"Billing not found"});
   }
   return res.status(200).json({Billing});
}
exports.getAllBilling = getAllBilling;
exports.addBilling = addBilling;
exports.getByID = getByID;



