import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';


function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="expense-tracker">
      <header>
        <h1>EXPENSE TRACKER</h1>
        <p>Start taking control of your finances and life. Record, categorize and analyze your spending.</p>
      </header>

      <div className="divider"></div>

      <div className="content-container">
        <ExpenseForm onAddExpense={addExpense} />
        
      </div>
    </div>
  );
}
export default App;
