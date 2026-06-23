const express= require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js')

const MONGO_URL='mongodb://127.0.0.1:27017/Wanderpark';

main()
 .then(()=>{
    console.log("conneted to db");
 })
 .catch((err)=>{
    console.log(err);
 });

async function main(){
     await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("hello i am groot");
});
app.get("/testlisting", async (req,res)=>{
    let samplelisting = new Listing({
        title: " awseome villa",
        description: "this is a beautiful villa",
        price: 10000,
        country: "India",
        location:"banaras" 
     });
     await samplelisting.save();
     console.log("sample listing saved");
     res.send("sucefully saved"); 
});

app.listen(8080, ()=>{
    console.log("serveer is running on port 8080");
}); 