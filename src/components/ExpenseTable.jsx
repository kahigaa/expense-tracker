import React from 'react';
import './ExpenseTable.css';

const ExpenseTable = ({ expenses }) => {
  return (
    <section className="expenses-list">
      <h2>Recent Expenses</h2>
      {expenses.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td> {/* No dollar sign here */}
                <td>{new Date(expense.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses recorded yet. Add your first expense above!</p>
      )}
    </section>
  );
};

export default ExpenseTable;