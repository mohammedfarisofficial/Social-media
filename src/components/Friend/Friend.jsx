import "./style.scss";
import removeFriendIcon from "../../assets/icons/user-minus-solid.svg";
const Friend = ({ friend }) => {
  const imageURL =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";
  return (
    <div className="friend-container">
      <div className="profile">
        <img
          src={`http://localhost:3001/assets/${friend.picturePath}`}
          alt={friend.picturePath}
        />
      </div>
      <div className="title">
        <h3>
          {friend.firstName} {friend.lastName}
        </h3>
        <p>{friend.occupation}</p>
      </div>
      <div className="icon">
        <img src={removeFriendIcon} />
      </div>
    </div>
  );
};

export default Friend;
