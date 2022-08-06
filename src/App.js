import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeChefLogin from "./pages/auth/homeChefLogin/HomeChefLogin";
import HomeChefSignUp from "./pages/auth/homeChefSignup/HomeChefSignUp";
import Logout from "./pages/auth/Logout";
import Dashboard from "./pages/dashboard/Dashboard";
// import Logout from "./pages/auth/Logout";

function App() {
  // const { chef } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {/* {chef ? (
              <>
                <Route exact path="/logout" element={<Logout />} />
              </>
            ) : ( */}
            <>
              <Route exact path="/" element={<HomeChefLogin />} />
              <Route path="/signup" element={<HomeChefSignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
            </>
            {/* )} */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
