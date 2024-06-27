import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CheckBalanceAction } from "../Redux/Action";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const reduxBankData = useSelector((state) => state.BankData.userData);
  const [AccountNumber, setAccountNumber] = useState("");
  const [userData, setUserData] = useState(null);
  console.log("userData: ", reduxBankData);

  const handleCheckBalance = (e) => {
    e.preventDefault();
    dispatch(CheckBalanceAction(AccountNumber));

    // axios
    //   .get(`http://localhost:5000/balance/${AccountNumber}`)
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
      {/* <h3>Name: {reduxBankData}</h3>
      <h3>Balance: {reduxBankData}</h3> */}

      <h3>Name: {reduxBankData?.name}</h3>
      <h3>Balance: {reduxBankData?.balance}</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            onChange={(e) => setAccountNumber(e.target.value)}
            type="text"
            placeholder="Enter Account No..."
          />
        </Form.Group>
        <Button onClick={handleCheckBalance} variant="primary" type="submit">
          Check Balance
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
