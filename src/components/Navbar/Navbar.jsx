import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
//comp
import Line from "../Line/Line";
//logo
import logoImage from "../../assets/icons/logo.png";
//icons
import darkModeIcon from "../../assets/icons/moon-solid.svg";
import messageIcon from "../../assets/icons/message-solid.svg";
import bellIcon from "../../assets/icons/bell-solid.svg";
import downIcon from "../../assets/icons/caret-down-solid.svg";
import DropList from "../DropList/DropList";
import { setLogout } from "../../state";

const Navbar = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const [fullName, setFullName] = useState("");

  const width = useWindowWidth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setFullName(`${user?.firstName} ${user?.lastName}`);
    }
  }, [user]);

  const logoutHandler = () => {
    dispatch(setLogout());
  };
  return (
    <div className="nav-container">
      <div className="nav-lt">
        <Link to="/">
          <img src={logoImage} alt="website-logo" />
        </Link>
        <h2>Sociout</h2>
        {width > 1024 && user && (
          <input
            className="search-container"
            placeholder="Search"
            type="search"
          />
        )}
      </div>
      <div className="nav-rt">
        {width > 1024 && (
          <div className="nav-icons-container">
            <img className="nav-action-icon" src={darkModeIcon} alt="" />
            <img className="nav-action-icon" src={messageIcon} alt="" />
            <img className="nav-action-icon" src={bellIcon} alt="" />
          </div>
        )}

        {user && (
          <div className="nav-actions-container">
            <div
              onClick={() => setIsDropOpen(!isDropOpen)}
              className="nav-action-inner"
            >
              <h3>{fullName}</h3>
              <img src={downIcon} alt="down-icon" />
            </div>
            {isDropOpen && (
              <div className="dropdown-menu">
                <DropList title="Logout" onClick={logoutHandler} />
                <Line />
                <DropList
                  title="Profile"
                  onClick={() => navigate(`/profile/${user._id}`)}
                />
                <Line />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
