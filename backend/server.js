const express = require ("express");
const app = express();
const port =5000;
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
connectDB();
app.use(cors());
const employeeRoutes = require("./routes/employeeRoutes");
app.use(express.json());

app.listen(port,()=>{
    
    console.log("listening to 5000");
})
app.get("/employee",(req,res)=>{
    res.send("okay srver")
})
app.use("/api/employees",employeeRoutes);