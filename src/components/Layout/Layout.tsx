import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";
import "../../styles/theme.scss";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../interface";

const Layout = () => {
  const { theme } = useSelector((state: rootState) => state.theme);

  return (
    <div className={`theme-${theme ? "light" : "dark"}`}>
      <div className="layout">
        <Navbar />
        <div className="bottom">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
