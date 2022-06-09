const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env"});
const PORT = process.env.PORT || 3000;

const app = express();
const dbo = require("./db/dbConnection");
const { ObjectId } = require("mongodb");

app.use(cors());
//app.use(require("./routes/record"));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//return a list of all transactions
app.get("/api/transactions", (req, res) => {
  let connection = dbo.getDatabase();
  connection
    .collection("transactions")
    .find({})
    .toArray((err, result) => {
      if(err) throw err;
      res.json(result);
    })
});
//create a new transaction
app.post("/api/transactions/add", (req, res) => {
  let connection = dbo.getDatabase();
  let newTransaction = {
    date: req.body.date,
    entity: req.body.entity,
    amount: req.body.amount
  };
  connection.collection("transactions").insertOne(newTransaction, (err, res2) => {
    if(err) throw err;
    res.json(res2);
  })
});
//update a transaction by id
app.put("/api/transactions/update/:id", (req, res) => {
  let connection = dbo.getDatabase();
  let queriedTransactionID = { _id: ObjectId(req.params.id) };
  let updatedValues = {
    $set: {
      date: req.body.date,
      entity: req.body.entity,
      amount: req.body.amount
    },
  }
  connection.collection("transactions").updateOne(queriedTransactionID, updatedValues, (err, res2) => {
    if(err) throw err;
    res.json(res2);
  }); 
});

app.delete("/api/transactions/delete/:id", (req, res) => {
  let connection = dbo.getDatabase();
  let queriedTransactionID = { _id: ObjectId(req.params.id) };

  connection.collection("transactions").deleteOne(
    queriedTransactionID, (err, res2) => {
      if(err) throw err;
      res.json(res2);
    });
});

app.listen(PORT, () => {
  dbo.connectToServer((err) => {if(err) console.error(err);});
  console.log(`Server listening on ${PORT}`);
});