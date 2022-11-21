import { BarChartOutlined } from "@mui/icons-material";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rootState } from "../../../interface";
import { setTheme } from "../../redux/themeSlice";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [isShow, setIsShow] = useState<Boolean>(false);
  const darkMode = useSelector((state: rootState) => state.theme.theme);
  const [themeMode, setThemeMode] = useState<Boolean>(false);

  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    setThemeMode(!themeMode);
    dispatch(setTheme(themeMode));
  };

  return (
    <div className="nav">
      <div className="nav-icons">
        <div className="icon">
          <ListOutlinedIcon
            className={` ${isShow ? "hidden" : ""}`}
            onClick={() => setIsShow(true)}
          />
        </div>
        <div className="icon" onClick={() => handleToggleTheme()}>
          {!darkMode ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />}
        </div>
      </div>
      <div className={`menu ${isShow ? "active" : ""}`}>
        <KeyboardDoubleArrowLeftOutlinedIcon
          className="close"
          onClick={() => setIsShow(false)}
        />
        <ul className="list-menu">
          <Link to={"/"}>
            <li className="menu-item">
              <span className="item-icon">
                <BarChartOutlined />
              </span>
              Show All
            </li>
          </Link>
          <Link to={"/favorites"}>
            <li className="menu-item">
              <span className="item-icon">
                <GradeOutlinedIcon />
              </span>
              Favorites
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
