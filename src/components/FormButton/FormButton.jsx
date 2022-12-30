import "./style.scss";

const FormButton = ({ onClick, buttonName = "Button" }) => {
  return (
    <div className="formButton-container">
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
};

export default FormButton;
