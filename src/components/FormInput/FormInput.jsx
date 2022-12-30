import "./style.scss";

const FormInput = ({ isHalf, inputName = "Name", type, state, setState }) => {
  return (
    <div
      className={isHalf ? "formInput-container half" : "formInput-container"}
    >
      <label
        style={{ color: state === "" ? "#d7d7d7" : "#1778F2" }}
        htmlFor={inputName}
      >
        {inputName}
      </label>
      <input
        onChange={(e) => setState(e.target.value)}
        required
        type={type === "password" ? "password" : "text"}
        name={inputName}
      />
    </div>
  );
};

export default FormInput;
