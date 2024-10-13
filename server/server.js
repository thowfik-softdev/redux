const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/BankDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

db.on("error", (err) => console.log("Connection error ", err));

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  balance: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("User", UserSchema);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
  res.send("This is thowfik");
});

// Create User Endpoint
app.post("/create-user", async (req, res) => {
  const { name, balance } = req.body;
  const newUser = new User({ name, balance });

  try {
    const user = await newUser.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Deposit Endpoint
app.post("/deposit", async (req, res) => {
  const { AccountNumber, DepositAmount } = req.body;
  console.log(req.body);
  try {
    const data = await User.findByIdAndUpdate(
      AccountNumber,
      { $inc: { balance: DepositAmount } },
      { new: true }
    );
    res.send({ user: data });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Withdraw Endpoint
app.post("/withdraw", async (req, res) => {
  const { AccountNumber, WithdrawAmount } = req.body;

  try {
    const user = await User.findById(AccountNumber);
    if (user.balance < WithdrawAmount) {
      return res.status(400).send("Insufficient funds");
    }
    user.balance -= WithdrawAmount;
    const updatedUser = await user.save();
    res.send({ user: updatedUser });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Check Balance Endpoint
app.get("/balance/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    res.send({ user: user });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
