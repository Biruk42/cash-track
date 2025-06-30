import { useState, useEffect } from "react";

function Budget({ totalExpenses }) {
  const [budget, setBudget] = useState(1000);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const storedBudget = JSON.parse(localStorage.getItem("budget"));
    if (storedBudget) {
      setBudget(storedBudget);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
    setRemaining(budget - totalExpenses);
  }, [budget, totalExpenses]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700">Budget</h2>
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg">
          <span className="font-medium">Budget:</span>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="ml-2 p-1 border rounded-lg w-32"
          />
        </div>
        <div
          className={`text-lg font-semibold ${remaining >= 0 ? "text-green-500" : "text-red-500"}`}>
          Remaining: ${remaining.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default Budget;