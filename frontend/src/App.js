import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home"
import CreateAccount from "./components/createaccount"
import Login from "./components/login"
import Deposit from "./components/deposit"
import Withdraw from "./components/withdraw"
import Balance from "./components/balance"
import AllData from "./components/alldata"

export const UserContext = React.createContext(null);

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/withdraw/" element={<Withdraw />} />
              {/* <Route path="/transactions/" element={Transactions} /> */}
              <Route path="/balance/" element={<Balance />} />
              <Route path="/alldata/" element={<AllData />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
