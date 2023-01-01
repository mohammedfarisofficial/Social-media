import "./style.scss";
import Navbar from "../../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="child-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
