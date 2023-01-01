import "./style.scss";
import LoadingSpinner from "../../assets/icons/Rolling-1s-200px.svg";

const FormButton = ({ onClick, buttonName = "Button", isLoading }) => {
  return (
    <div className="formButton-container">
      {isLoading ? (
        <img
          className="loading-spinner
        "
          src={LoadingSpinner}
          alt="loading-spinner"
        />
      ) : (
        <button onClick={onClick}>{buttonName}</button>
      )}
    </div>
  );
};

export default FormButton;
