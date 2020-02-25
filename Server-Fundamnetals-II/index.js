const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

const books = [
  {name: "Name of the Wind", author: "Patrick Rothfuss"}, 
  {name: "Of Mice and Men", author: "John Steinbeck"}
]

app.use(bodyParser.json())


app.get("/sanity", (req,res,next)=> {
    responseMsg = "Ok";
    try {
      res.send(responseMsg).status(200).end();
    } catch(e) {
      throw e;
    }
});

app.get("/books", (req,res,next)=> {
  try {
    res.send(books).status(200).end();
  } catch(e) {
    throw e;
  }
});

app.get("/book/:index", (req,res,next)=> {
  try {
    res.send(books[req.params.index]).status(200).end();
  } catch(e) {
    throw e;
  }
});


app.post("/book", (req,res,next)=> {
    const {name, author} = req.body;
    try {
      books.push({
        name: name, 
        author: author
      });
      const actionMsg = "Book added successfully.";
      res.send(actionMsg).status(200).end();
    } catch(e) {
      throw e;
    }
    next();
});

app.listen(PORT,()=>{
  let serverMsg = "Server is up in port"
  console.log(`${serverMsg} ${PORT}`);
});