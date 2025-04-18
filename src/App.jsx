import { useState } from "react";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

function App() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 space-y-6">
        <AddExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </main>
    </div>
  );
}

export default App;
