import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import './App.css'
const Dummy_Expenses = [];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => [expense, ...prevExpense])

  }
  return (
    <div className="background">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <br />
      <br />
      <h1>Created By Mohammed Aadil Alvi</h1>
    </div>
  );
}

export default App;
