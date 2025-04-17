import { useState } from "react";

function AddExpenseForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Expense:", { name, amount });
    setName("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">Add Expense</h2>
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Expense name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Expense amount"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;
