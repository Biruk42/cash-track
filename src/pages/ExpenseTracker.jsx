import { useState } from "react";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Groceries", amount: 50 },
    { id: 2, name: "Rent", amount: 500 },
    { id: 3, name: "Utilities", amount: 100 },
  ]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), ...expense },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <main className="p-4 space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Total Expenses</h2>
        <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
      </div>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </main>
  );
}

export default ExpenseTracker;
