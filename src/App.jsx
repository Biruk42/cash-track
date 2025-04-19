import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ExpenseTracker from "./pages/ExpenseTracker";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tracker" element={<ExpenseTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
