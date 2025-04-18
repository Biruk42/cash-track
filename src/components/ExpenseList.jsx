function ExpenseList({ expenses, onDeleteExpense }) {
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
              className="flex justify-between items-center bg-gray-100 p-2 rounded shadow"
            >
              <div>
                <span>{expense.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>${expense.amount.toFixed(2)}</span>
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;