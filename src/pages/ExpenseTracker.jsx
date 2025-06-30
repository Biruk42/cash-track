import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import EditExpenseForm from "../components/EditExpenseForm";
import ExpenseChart from "../components/ExpenseChart";
import Budget from "../components/Budget";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editingExpense, setEditingExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), ...expense },
    ]);
  };

  const deleteExpense = (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id)
      );
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setIsEditing(true);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setIsEditing(false);
    setEditingExpense(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingExpense(null);
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.name.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((expense) =>
      categoryFilter ? expense.category === categoryFilter : true
    );

  const sortedExpenses = [...filteredExpenses].sort((a, b) =>
    sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
  );

  const categories = [...new Set(expenses.map((expense) => expense.category))];

  return (
    <main className="p-4 space-y-6">
      {/* Budget Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Budget totalExpenses={totalExpenses} />
      </motion.div>

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

      {/* Expense Chart */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        <ExpenseChart expenses={expenses} />
      </motion.div>

      {/* Filter and Sort Options */}
      <motion.div
        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="asc">Sort by Amount (Asc)</option>
          <option value="desc">Sort by Amount (Desc)</option>
        </select>
      </motion.div>

      {/* Add/Edit Expense Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        {isEditing ? (
          <EditExpenseForm
            expense={editingExpense}
            onUpdateExpense={handleUpdateExpense}
            onCancel={handleCancelEdit}
          />
        ) : (
          <AddExpenseForm onAddExpense={addExpense} />
        )}
      </motion.div>

      {/* Expense List */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        <ExpenseList
          expenses={sortedExpenses}
          onDeleteExpense={deleteExpense}
          onEditExpense={handleEditExpense}
        />
      </motion.div>
    </main>
  );
}

export default ExpenseTracker;
