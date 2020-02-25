const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 1337;


app.get("/recipe/:ingredient", (req,res,next)=> {
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