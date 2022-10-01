const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://lgadam:foltos344@cluster0.tv1qglk.mongodb.net/shop?retryWrites=true&w=majority"
).then(()=>console.log("Adatbázis kapcsolódás sikeres")).catch((err)=>{
    console.log(err)
});

app.listen(8000, ()=> {
    console.log("Szerver fut");
});