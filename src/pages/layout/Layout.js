import React from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../../pages/dashnoard/Dashboard";
import Home from "../../pages/home/Home";
import Customer from "../../pages/customer/Customers";
import Order from "../../pages/order/order";
import Delivery from "../../pages/delivery/Delivery";
import Menu from "../../pages/menu/Menu";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { Box } from "@material-ui/core";
import Login from "../../pages/auth/login/Login";
import Signup from "../../pages/auth/signup/Signup";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(7, 1),
    // marginLeft: "72px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(2, 2),
    // },
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.wrapper}>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/order" element={<Order />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dropdownMenu" element={<DropdownMenu />} />
        </Routes>
      </Box>
    </>
  );
}
