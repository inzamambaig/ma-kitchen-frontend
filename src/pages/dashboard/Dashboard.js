// import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const navigate = useNavigate();
  const { chef } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!chef) {
      navigate("/");
    }
  }, [chef, navigate]);

  return <div>Dashboard</div>;
}
