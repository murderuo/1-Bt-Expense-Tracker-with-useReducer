import React, { useContext } from 'react';

import { GlobalContext } from "../../context/GlobalState";


function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts=transactions.map((transaction)=>transaction.amount)
  // console.log(amounts);
  const incomes=transactions.filter((transaction)=>transaction.amount>0).reduce((acc,item)=>(acc+=item.amount),0)
  const expenses=transactions.filter((transaction)=>transaction.amount<0).reduce((acc,item)=>(acc+=item.amount),0)

  // console.log('incomes:',incomes,expenses);



  return (
    <>
      <h4>Your Balance</h4>
      <h1 >${(incomes+expenses).toFixed(2)}</h1>
    </>
  );
}

export default Balance;
