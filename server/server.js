const express =require("express")
const cors =require("cors")
const mongoose = require("mongoose")
const app = express()
const PORT =8080
app.use (cors())
app.use (express.json())

let CustomersSchema = new mongoose.Schema({
name : String,
pos : String,
image : String,
desc :String


})

mongoose.connect("mongodb+srv://database:DmIZxcvdy2iFKGYL@cluster0.1wcmhup.mongodb.net/?retryWrites=true&w=majority").then((res) =>console.log("Connected"))
const CustomersModel= mongoose.model("Customers"  , CustomersSchema)
mongoose.set("strictQuery", false);

app.get("/api/customers" , async(req,res) =>{
    let Customer = await CustomersModel.find({})
    res.send(Customer)
})

app.post("/api/customers" ,async(req,res) =>{
    let Customer = new CustomersModel({...req.body})
    await Customer.save()
    res.send(Customer)

})
app.get("/api/customers/:id" , async(req,res)=>{
let {id} = req.params
let Customer = await CustomersModel.findById(id)
res.send(Customer)
})

app.delete("api/customers/:id", async(req,res) =>{
    let {id } = req.params
    let deleted = await CustomersModel.findByIdAndDelete(id)
    res.send(deleted)
})
app.listen( PORT , () =>{
    console.log("App runnig on " +PORT )
})