import Navbar from "../../components/Navbar/Navbar";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="child-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
