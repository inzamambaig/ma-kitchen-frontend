import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeChefLogin from "./pages/auth/homeChefLogin/HomeChefLogin";
import HomeChefSignUp from "./pages/auth/homeChefSignup/HomeChefSignUp";
import Logout from "./pages/auth/Logout";
import Dashboard from "./pages/dashboard/Dashboard";
import EmailVer from "./pages/auth/emailVerification/email.js";
import Location from "./pages/auth/location/location.js";
import UploadLogo from "./pages/auth/uploadLogo/uploadLogo.js";
import Reset from "./pages/auth/reset/reset.js";
// import GetCode from "./pages/auth/getcode/getCode.js";
import Forget from "./pages/auth/forget/forget.js";
import Upload from "./pages/auth/uploadCover/upload";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomeChefLogin />} />
            <Route path="/forget" element={<Forget />} />
            {/* Sign Up */}
            <Route path="/signup" element={<HomeChefSignUp />} />
            <Route path="/email" element={<EmailVer />} />
            {/* From Email */}
            <Route path="/location" element={<Location />} />
            <Route path="/uploadLogo" element={<UploadLogo />} />
            <Route path="/upload" element={<Upload />} />
            {/* Password reset from email */}
            <Route path="/reset" element={<Reset />} />
            {/* Reset redirect to login */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/getCode" element={<GetCode />} /> */}
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
