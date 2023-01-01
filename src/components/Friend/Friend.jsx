import removeFriendIcon from "../../assets/icons/user-minus-solid.svg";
import "./style.scss";

const Friend = ({ friend }) => {
  return (
    <div className="friend-container">
      <div className="profile">
        <img src={friend?.picture2} alt="profile" />
      </div>
      <div className="title">
        <h3>
          {friend?.firstName} {friend?.lastName}
        </h3>
        <p>{friend?.occupation}</p>
      </div>
      <div className="icon">
        <img src={removeFriendIcon} />
      </div>
    </div>
  );
};

export default Friend;
