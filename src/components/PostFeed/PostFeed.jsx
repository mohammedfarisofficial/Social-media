import { useEffect } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index";
import { useParams } from "react-router-dom";

import Post from "../Post/Post";

const PostFeed = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const { userId } = useParams();

  const getPosts = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL + "/posts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="postfeed-container">
      {posts?.map((post, index) => (
        <Post key={index} post={post} friendId={post?.userId} />
      ))}
    </div>
  );
};

export default PostFeed;
