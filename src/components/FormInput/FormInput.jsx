import { useState } from "react";
import "./style.scss";

const FormInput = ({ isHalf, inputName = "Name" ,type}) => {
  const [inputText, setInputText] = useState("");
  return (
    <div
      className={isHalf ? "formInput-container half" : "formInput-container"}
    >
      <label
        style={{ color: inputText === "" ? "#d7d7d7" : "#1778F2" }}
        htmlFor={inputName}
      >
        {inputName}
      </label>
      <input type={ type === "password" ? 'password' : 'text'} onChange={e=>setInputText(e.target.value)} name={inputName} />
    </div>
  );
};

export default FormInput;
