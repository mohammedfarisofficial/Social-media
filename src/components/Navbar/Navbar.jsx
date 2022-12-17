import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWidth } from "@react-hook/window-size";

const Navbar = () => {
  const width = useWindowWidth();
  return (
    <div className="nav-container">
      <div className="nav-lt">
        <h2>Sociout</h2>
        {width > 1024 && (
          <input
            className="search-container"
            placeholder="Search"
            type="search"
          />
        )}
      </div>
      <div className="nav-rt">
        <div className="nav-icons">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-circle-half-stroke"
          />
          <FontAwesomeIcon className="icon" icon="fa-solid fa-message" />
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </div>
        <div className="nav-dropdown"></div>
      </div>
    </div>
  );
};

export default Navbar;
