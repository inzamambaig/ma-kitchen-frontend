import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeChefLogin from "./pages/auth/homeChefLogin/HomeChefLogin";
import HomeChefSignUp from "./pages/auth/homeChefSignup/HomeChefSignUp";
import Logout from "./pages/auth/Logout";
import Dashboard from "./pages/dashboard/Dashboard";
import EmailVer from "./pages/auth/emailVerification/email.js";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomeChefLogin />} />
            <Route path="/signup" element={<HomeChefSignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/email" element={<EmailVer />} />

          </Routes>
        </div>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
}

export default App;
