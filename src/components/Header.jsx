import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">CashTrack</Link>
        </h1>
        <nav>
          {user ? (
            <>
              <Link to="/tracker" className="text-white hover:underline mr-4">
                Expense Tracker
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:underline mr-4">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:underline">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
