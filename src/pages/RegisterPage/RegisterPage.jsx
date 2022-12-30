import { useState, useEffect } from "react";
import "./style.scss";
import Layout from "../Layout/Layout";
import FormCard from "../../components/FormCard/FormCard";
import FormButton from "../../components/FormButton/FormButton";
import FormInput from "../../components/FormInput/FormInput";
import FormSwitch from "../../components/FormSwitch/FormSwitch";
import FormFile from "../../components/FormFile/FormFile";
//
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    const base64 = await convertToBase64(image);
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("location", location);
    formData.append("occupation", occupation);
    formData.append("picturePath", image.name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("picture2", base64);

    const savedUserResponse = await fetch(
      process.env.REACT_APP_API_URL + "/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    if (savedUser) {
      navigate("/login");
    }
  };
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

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
              <FormInput
                state={firstName}
                setState={setFirstName}
                inputName="First Name"
                isHalf={true}
              />
              <FormInput
                state={lastName}
                setState={setLastName}
                inputName="Last Name"
                isHalf={true}
              />
            </div>
            <FormInput
              state={location}
              setState={setLocation}
              inputName="Location"
              isHalf={false}
            />
            <FormInput
              state={occupation}
              setState={setOccupation}
              inputName="Occupation"
              isHalf={false}
            />
            <FormFile setState={setImage} />
            <FormInput
              state={email}
              setState={setEmail}
              inputName="Email"
              isHalf={false}
            />
            <FormInput
              state={password}
              setState={setPassword}
              inputName="Password"
              type="password"
              isHalf={false}
            />
          </form>
          <FormSwitch route="register" />
          <FormButton onClick={handleRegister} buttonName="Create account" />
        </FormCard>
      </div>
    </Layout>
  );
};

export default RegisterPage;
