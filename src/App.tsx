import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PatientFormulas from "./pages/PatientFormulas";
import Promotions from "./pages/Promotions";
import PrivateRoute from "./routes/PrivateRoute";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/formulas"
            element={
              <PrivateRoute>
                <PatientFormulas />
              </PrivateRoute>
            }
          />
          <Route
            path="/promotions"
            element={
              <PrivateRoute>
                <Promotions />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
