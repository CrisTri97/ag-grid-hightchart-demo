import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { rootState } from "../../../interface";
import "../../styles/theme.scss";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

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
