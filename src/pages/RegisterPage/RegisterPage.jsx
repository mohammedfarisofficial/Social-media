import "./style.scss";
import Layout from "../Layout/Layout";
import FormCard from "../../components/FormCard/FormCard";
import FormButton from "../../components/FormButton/FormButton";
import FormInput from "../../components/FormInput/FormInput";
import FormSwitch from "../../components/FormSwitch/FormSwitch";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="register-container">
        <FormCard>
          <div className="register-titles">
            <h4>start for free</h4>
            <h2>
              Create new account<span>.</span>
            </h2>
          </div>
          <form action="">
            <div className="first-last-name">
              <FormInput inputName="First Name" isHalf={true} />
              <FormInput inputName="Last Name" isHalf={true} />
            </div>
            <FormInput inputName="Location" isHalf={false} />
            <FormInput inputName="Occupation" isHalf={false} />
            <FormInput inputName="Email" isHalf={false} />
            <FormInput inputName="Password" type="password" isHalf={false} />
          </form>
          <FormSwitch route="register" />
          <FormButton buttonName="Create account" />
        </FormCard>
      </div>
    </Layout>
  );
};

export default RegisterPage;
