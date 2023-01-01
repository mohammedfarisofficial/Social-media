import "./style.scss";
import pencilIcon from "../../assets/icons/pencil-solid.svg";

const SocialLink = () => {
  return (
    <div className="social-link">
      <div className="icon">G</div>
      <div className="social-link-title">
        <h4>Twitter</h4>
        <p>Social Profile</p>
      </div>
      <div className="social-edit-icon icon">
        <img src={pencilIcon} alt="edit-btn" />
      </div>
    </div>
  );
};

export default SocialLink;
