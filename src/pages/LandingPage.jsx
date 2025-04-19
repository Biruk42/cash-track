import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to CashTrack</h1>
      <p className="text-lg mb-8">
        Track your expenses effortlessly and beautifully.
      </p>
      <Link
        to="/tracker"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;
