import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalState";
import React from 'react';


function App() {
  // const data=useContext(GlobalContext)
  // console.log(data);


  return (
    <h2>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </h2>
  );
}

export default App;
