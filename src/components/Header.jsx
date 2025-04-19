import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">CashTrack</Link>
        </h1>
        <nav>
          <Link to="/tracker" className="text-white hover:underline">
            Expense Tracker
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
