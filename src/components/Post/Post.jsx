import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ post }) => {
  const following = false;
  return (
    <div className="post-container">
      <div className="post-user">
        <div className="post-user-details">
          <div className="user-image">
            <img loading="lazy" src={post.profileImg} alt="" />
          </div>
          <div className="user-detail">
            <h3>{post.name}</h3>
            <p>{post.location}</p>
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
        <p>{post.description}</p>
      </div>
      <div className="post-image">
        <img loading="lazy" src={post.postImg} alt="" />
      </div>
      <div className="post-likes-comments">
        <div className="likes">
          {/* <FontAwesomeIcon icon="fa-regular fa-heart" />  */}
          34 Likes
        </div>
        <div className="comments">
          {/* <FontAwesomeIcon icon="fa-solid fa-comment" /> */}
           33 Comments
        </div>
      </div>
    </div>
  );
};

export default Post;
