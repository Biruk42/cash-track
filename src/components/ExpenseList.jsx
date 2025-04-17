function ExpenseList() {
  const expenses = [
    { id: 1, name: "Groceries", amount: 50 },
    { id: 2, name: "Rent", amount: 500 },
    { id: 3, name: "Utilities", amount: 100 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      <ul className="space-y-2">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between bg-gray-100 p-2 rounded shadow">
            <span>{expense.name}</span>
            <span>${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
