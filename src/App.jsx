import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Insights from "./components/Insights";
import Login from "./components/Login";
import Reports from "./components/Reports";
import LandingPage from "./pages/LandPage";
import Templates from "./components/Templates";


const App = () => {
  const isLoggedIn = true; // Replace with auth logic later

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/templates" element={<Templates />} />
    </Routes>
  );
};

export default App;
