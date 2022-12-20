import "./style.scss";
import { Link } from "react-router-dom";

const FormSwitch = ({ route }) => {
  const allRoutes = [
    { description: "Already A Member", page: "Login Here", route: "/login" },
    {
      description: "Dont’t have an account",
      page: "Register Here",
      route: "/register",
    },
  ];
  let router;
    router = route === "register" ? allRoutes[0] : allRoutes[1];
  return (
    <div className="formSwitch-container">
      <Link style={{ textDecoration: 'none'}} to={router.route}>
        <p>
          {router.description}?<span>{router.page}</span>
        </p>
      </Link>
    </div>
  );
};

export default FormSwitch;
