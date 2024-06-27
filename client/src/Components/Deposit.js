
import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DepositAction } from "../Redux/Action";
import axios from "axios";

const Deposit = () => {
  const dispatch = useDispatch();
  const reduxBankData = useSelector((state) => state.BankData.userData);
  console.log("reduxBankData: ", reduxBankData);

  const Money = 10;

  const [AccountNumber, setAccountNumber] = useState("");
  const [DepositAmount, setDepositAmount] = useState();
  const [userData, setUserData] = useState(null);

  const handleDeposit = async (e) => {
    e.preventDefault();
    // console.log("button clicked");
    dispatch(DepositAction({ AccountNumber, DepositAmount }));

    // await axios
    //   .post("http://localhost:5000/deposit", { AccountNumber, DepositAmount })
    //   .then((res) => {
    //     console.log(res);
    //     setUserData(res.data.user);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Container className="py-5">
      <div className=" mb-3">
        <h3>Name: {reduxBankData?.name}</h3>
        <h3>Balance: {reduxBankData?.balance}</h3>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            onChange={(e) => setAccountNumber(e.target.value)}
            type="text"
            placeholder="Enter Account No..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount to Deposit</Form.Label>
          <Form.Control
            onChange={(e) => setDepositAmount(e.target.value)}
            type="text"
            placeholder="Enter Amount..."
          />
        </Form.Group>
        <Button onClick={handleDeposit} variant="primary" type="submit">
          Deposit
        </Button>
      </Form>
    </Container>
  );
};

export default Deposit;
