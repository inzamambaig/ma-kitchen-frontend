import HomeChefLogin from "./pages/auth/homeChefLogin/HomeChefLogin";
import HomeChefSignUp from "./pages/auth/homeChefSignup/HomeChefSignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomeChefLogin />} />
        <Route path="/signup" element={<HomeChefSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
