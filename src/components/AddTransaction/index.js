import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>Add New transaction</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTransaction({
            id: Math.floor(Math.random() * 1000),
            text: text,
            amount: +amount,
          });
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter transaction .."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative-expense,positive-income)
          </label>
          <input
            type="number"
            placeholder="enter amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
