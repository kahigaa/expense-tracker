import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: '',
    description: '',
    amount: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.category && expense.description && expense.amount && expense.date) {
      onAddExpense({
        ...expense,
        amount: expense.amount 
      });
      setExpense({
        category: '',
        description: '',
        amount: '',
        date: ''
      });
    }
  };

  return (
    <section className="add-expense">
      <h2>Add Expense</h2>
      <p>Enter your expense details below</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter category"
            value={expense.category}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            placeholder="Enter expense description"
            value={expense.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input 
            type="number" 
            id="amount" 
            name="amount" 
            placeholder="Enter amount"
            value={expense.amount}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={expense.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </section>
  );
};

export default ExpenseForm;
