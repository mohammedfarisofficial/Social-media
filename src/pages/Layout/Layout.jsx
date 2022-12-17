import Navbar from "../../components/Navbar/Navbar";
import './style.scss'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
