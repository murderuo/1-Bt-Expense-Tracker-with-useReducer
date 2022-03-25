import reducerFunc from "./ReducerFunc";
import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Table", amount: -100 },
    { id: 3, text: "Otherincome", amount: +500 },
  ],
};

//create contex
export const GlobalContext = createContext(initialState);

//create Provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  //Action kısmı burada yapılacak--->
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    })
  }
  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    })
  }

  //<---- sonra da functionlar values içinde provide edilecek..
  const values = { transactions: state.transactions,deleteTransaction,addTransaction };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
