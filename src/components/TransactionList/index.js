import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  // const context=useContext(GlobalContext)
  // console.log(context);
  const { transactions} = useContext(GlobalContext);
  // console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
