import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
      {/* Total Expenses Section */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-semibold text-gray-700">Total Expenses</h2>
        <p className="text-4xl font-bold text-blue-600 mt-2">
          ${totalExpenses.toFixed(2)}
        </p>
      </motion.div>

      {/* Add Expense Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        <AddExpenseForm onAddExpense={addExpense} />
      </motion.div>

      {/* Expense List */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </motion.div>
    </main>
  );
}

export default ExpenseTracker;
