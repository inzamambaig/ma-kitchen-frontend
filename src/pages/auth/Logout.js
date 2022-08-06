import { logout, reset } from "../../features/chef/authSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
export default Logout;
