import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deposit from "./Components/Deposit";
import Withdrawn from "./Components/Withdraw";
import Home from "./Components/Home";
import BankNavbar from "./Components/BankNavbar";

function App() {
  return (
    <div className="App">
      <BankNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdrawn" element={<Withdrawn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;