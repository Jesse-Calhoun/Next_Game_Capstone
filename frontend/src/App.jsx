// General Imports
import { Routes, Route } from "react-router-dom";
// import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage/>
            </PrivateRoute>
          }
        />
        <Route path='' element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
