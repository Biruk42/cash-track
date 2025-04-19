// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        <ul className="space-y-2">
          <AnimatePresence>
            {expenses.map((expense) => (
              <motion.li
                key={expense.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}>
                <div>
                  <span className="text-gray-700">{expense.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-900 font-semibold">
                    ${expense.amount.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onDeleteExpense(expense.id)}
                    className="text-red-600 hover:text-red-800 transition duration-300">
                    Delete
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
