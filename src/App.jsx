import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 space-y-6">
        <AddExpenseForm />
        <ExpenseList />
      </main>
    </div>
  );
}

export default App;
