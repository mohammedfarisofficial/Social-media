import "./style.scss";
import Layout from "../Layout/Layout";
import FormCard from "../../components/FormCard/FormCard";
import FormButton from "../../components/FormButton/FormButton";
import FormSwitch from "../../components/FormSwitch/FormSwitch";
import FormInput from "../../components/FormInput/FormInput";

const LoginPage = () => {
  return (
    <Layout>
      <div className="login-container">
        <FormCard>
          <div className="login-titles">
            <h2>Welcome Back</h2>
            <h4>Welcome back! Please enter your details</h4>
          </div>
          <form action=""></form>
          <FormInput />
          <FormInput />
          <FormSwitch route="login" />
          <FormButton buttonName="Sign In" />
        </FormCard>
      </div>
    </Layout>
  );
};

export default LoginPage;
