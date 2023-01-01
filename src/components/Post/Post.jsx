import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { setFriends, setPost } from "../../state";
//icons
import heartIcon from "../../assets/icons/heart-regular.svg";
import solidHartIcon from "../../assets/icons/heart-solid.svg";
import commentIcon from "../../assets/icons/comment-solid.svg";

const Post = ({ post, friendId }) => {
  const [isFriend, setIsFriend] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(post.likes[loggedInUserId]);
  const likeCount = Object.keys(post.likes).length;
  const [isMyPost, setIsMyPost] = useState(false);
  // const [isComments, setIsComments] = useState(false);

  useEffect(() => {
    setIsFriend(friends.find((friend) => friend?._id === friendId));
  }, [friendId, friends]);
  useEffect(() => {
    if (friendId === _id) {
      setIsMyPost(true);
    }
  }, [friendId, _id, isMyPost]);

  const patchLike = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/posts/${post?._id}/like`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const patchFriend = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.message) {
      console.log("error bro", data);
    } else {
      if (data) {
        dispatch(setFriends({ friends: data }));
      }
    }
  };

  const profileHandler = (e) => {
    e.preventDefault();
    navigate(`/profile/${friendId}`);
  };

  return (
    <div className="post-container">
      <div className="post-user">
        <div className="post-user-details">
          <div className="user-image">
            <img loading="lazy" src={post?.userPicturePath} alt="" />
          </div>
          <div onClick={(e) => profileHandler(e)} className="user-detail">
            <h3>
              {post?.firstName} {post?.lastName}
            </h3>
            <p>{post?.location}</p>
          </div>
        </div>
        <div className="post-follow-button">
          {!isMyPost &&
            (isFriend ? (
              <button onClick={patchFriend} className="unfollow">
                unfollow
              </button>
            ) : (
              <button onClick={patchFriend} className="follow">
                follow
              </button>
            ))}
        </div>
      </div>
      <div className="post-description">
        <p>{post?.description}</p>
      </div>
      <div className="post-image">
        <img loading="lazy" src={post?.picture2} alt="" />
      </div>
      <div className="post-likes-comments">
        <div className="likes">
          {isLiked ? (
            <img
              onClick={patchLike}
              className="post-icon"
              src={solidHartIcon}
              alt="heart-icon"
            />
          ) : (
            <img
              onClick={patchLike}
              className="post-icon"
              src={heartIcon}
              alt="heart-icon"
            />
          )}

          <p>
            <span>{likeCount}</span> Likes
          </p>
        </div>
        <div className="comments">
          <img className="post-icon" src={commentIcon} alt="comment-icon" />
          <p>
            <span>23</span> Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
