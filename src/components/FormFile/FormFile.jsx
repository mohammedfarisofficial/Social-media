import "./style.scss";

const FormFile = ({ setState }) => {
  return (
    <div className="formFile-container">
      <input
        onChange={(e) => setState(e.target.files[0])}
        title=" "
        name="photo"
        type="file"
      />
    </div>
  );
};

export default FormFile;
