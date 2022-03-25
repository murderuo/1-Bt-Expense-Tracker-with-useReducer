import React,{useContext} from 'react';

import { GlobalContext } from "../../context/GlobalState";



function IncomeExpenses() {

  const { transactions } = useContext(GlobalContext);
  const incomes=transactions.filter((transaction)=>transaction.amount>0).reduce((acc,item)=>(acc+=item.amount),0)
  const expenses=transactions.filter((transaction)=>transaction.amount<0).reduce((acc,item)=>(acc+=item.amount),0)

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">
            +{incomes}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            {expenses}
          </p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
