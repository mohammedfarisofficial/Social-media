import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Post = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";
  const following = false;
  return (
    <div className="post-container">
      <div className="post-user">
        <div className="post-user-details">
          <div className="user-image">
            <img src={imageURL} alt="" />
          </div>
          <div className="user-detail">
            <h3>Mohammed Faris</h3>
            <p>Palakkad,Kerala</p>
          </div>
        </div>
        <div className="post-follow-button">
          {following ? (
            <button className="unfollow">unfollow</button>
          ) : (
            <button className="follow">follow</button>
          )}
        </div>
      </div>
      <div className="post-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
          eveniet!
        </p>
      </div>
      <div className="post-image">
        <img src={imageURL} alt="" />
      </div>
      <div className="post-likes-comments">
        <div className="likes"><FontAwesomeIcon icon="fa-regular fa-heart" /> 34 Likes</div>
        <div className="comments"><FontAwesomeIcon icon="fa-solid fa-comment" /> 33 Comments</div>
      </div>
    </div>
  );
};

export default Post;
