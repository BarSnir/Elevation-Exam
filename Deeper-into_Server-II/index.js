const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 1337;
let  counter = 0;

counterMiddleware = function(req,res, next) {
    if (counter === 5) {
        res.send({error: "Too many requests"}).status(500).end();
    }
    next();
}

app.get("/recipe/:ingredient", counterMiddleware ,(req,res,next)=> {
    counter++;
    const appUrl = "https://recipes-goodness.herokuapp.com/recipes/";
    try {
      axios.get(`${appUrl}${req.params.ingredient}`)
      .then((payload)=>{
        res.send(payload.data).status(200).end();
      });
    } catch(e) {
      throw e;
    }
});


app.listen(PORT,()=>{
  let serverMsg = "Server is up in port"
  console.log(`${serverMsg} ${PORT}`);
});