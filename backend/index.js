const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Adatbázis kapcsolódás sikeres")).catch((err)=>{
    console.log(err)
});

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 8000, ()=> {
    console.log("Szerver fut");
});