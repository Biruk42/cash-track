function ExpenseList({ expenses }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between bg-gray-100 p-2 rounded shadow">
              <span>{expense.name}</span>
              <span>${expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
