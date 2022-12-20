import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import "./style.scss";


const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setIsLoading(true), 3500);
  // }, [isLoading]);

  return isLoading === false ? (
    <div className="wrapper">
      <Navbar />
      <div className="child-wrapper">{children}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default Layout;
