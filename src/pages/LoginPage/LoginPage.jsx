import "./style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Layout from "../Layout/Layout";
import FormCard from "../../components/FormCard/FormCard";
import FormButton from "../../components/FormButton/FormButton";
import FormSwitch from "../../components/FormSwitch/FormSwitch";
import FormInput from "../../components/FormInput/FormInput";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = {
    email,
    password,
  };
  const handleLogin = async () => {
    setIsLoading(true);
    const loggedInUserResponse = await fetch(
      process.env.REACT_APP_API_URL + "/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    const loggedIn = await loggedInUserResponse.json();
    if (loggedIn) {
      dispatch(setLogin({ user: loggedIn.user, token: loggedIn.token }));
      setIsLoading(false);
      navigate("/");
    }
  };
  return (
    <Layout>
      <div className="login-container">
        <FormCard>
          <div className="login-titles">
            <h2>Welcome Back</h2>
            <h4>Welcome back! Please enter your details</h4>
          </div>
          <form action=""></form>
          <FormInput state={email} setState={setEmail} inputName="Email" />
          <FormInput
            state={password}
            setState={setPassword}
            type="password"
            inputName="Password"
          />
          <FormSwitch route="login" />
          <FormButton
            isLoading={isLoading}
            onClick={handleLogin}
            buttonName="Sign In"
          />
        </FormCard>
      </div>
    </Layout>
  );
};

export default LoginPage;
