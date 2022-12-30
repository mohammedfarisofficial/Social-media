import "./style.scss";

const DropList = ({ onClick, title }) => {
  return (
    <div className="drop-list" onClick={onClick}>
      <h4>{title}</h4>
    </div>
  );
};

export default DropList;
