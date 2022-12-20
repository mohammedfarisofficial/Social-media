import { useEffect, useState } from "react";
import "./style.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWidth } from "@react-hook/window-size";
import logoImage from "../../assets/icons/logo.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(true);

  const width = useWindowWidth();
  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setIsLogged(false);
    }
  }, [location.pathname]);

  return (
    <div className="nav-container">
      <div className="nav-lt">
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
        <h2>Sociout</h2>
        {width > 1024 && isLogged && (
          <input
            className="search-container"
            placeholder="Search"
            type="search"
          />
        )}
      </div>
      <div className="nav-rt">
        <div className="nav-icons">
          {/* <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-circle-half-stroke"
          /> */}
          {/* <FontAwesomeIcon className="icon" icon="fa-solid fa-message" />
          <FontAwesomeIcon icon="fa-solid fa-bell" /> */}
        </div>
        <div className="nav-dropdown"></div>
      </div>
    </div>
  );
};

export default Navbar;
