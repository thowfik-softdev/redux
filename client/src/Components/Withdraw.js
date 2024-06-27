import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawnAction } from "../Redux/Action";
import axios from "axios";

const Withdraw = () => {
  const dispatch = useDispatch();
  const reduxBankData = useSelector((state) => state.BankData.userData);
  //   const Money = 10;

  const [AccountNumber, setAccountNumber] = useState("");
  const [WithdrawAmount, setWithdrawAmount] = useState("");
  const [userData, setUserData] = useState(null);

  const handleWithdraw = async (e) => {
    e.preventDefault();
    dispatch(WithdrawnAction({ AccountNumber, WithdrawAmount }));

    // try {
    //   const res = await axios.post("http://localhost:5000/withdraw", {
    //     AccountNumber,
    //     WithdrawAmount,
    //   });
    //   console.log(res);
    //   setUserData(res.data.user);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Container className="py-5">
      <div className=" mb-3">
        <h3>Name: {reduxBankData?.name}</h3>
        <h3>Balance: {reduxBankData?.balance}</h3>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formAccountNumber">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            onChange={(e) => setAccountNumber(e.target.value)}
            type="text"
            placeholder="Enter Account No..."
            value={AccountNumber}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formWithdrawAmount">
          <Form.Label>Amount to Withdraw</Form.Label>
          <Form.Control
            onChange={(e) => setWithdrawAmount(e.target.value)}
            type="text"
            placeholder="Enter Amount..."
            value={WithdrawAmount}
          />
        </Form.Group>
        <Button onClick={handleWithdraw} variant="primary" type="submit">
          Withdraw
        </Button>
      </Form>
    </Container>
  );
};

export default Withdraw;
