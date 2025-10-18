import express from "express"
  
const app=express();

app.listen("3000",()=>{
    console.log("server is running on port 3000 http://localhost:3000/");
});

app.get("/",(req,res)=>{
    const d = new Date();
    let day = d.getDay();

let today="weekday";
let adv="Lets Work Hard";
if(day==0 || day==6){
    today="weekend";
    adv="Lets have some fun";
}
   res.render("index.ejs",{
    day:today,
    advice :adv,
   }); 
});
