import { useEffect } from "react";
import "./style.scss";
import Friend from "../Friend/Friend";
import { useSelector, useDispatch } from "react-redux";
import { setFriends } from "../../state/index";
const Followers = () => {
  const { _id } = useSelector((state) => state.user);
  // const userId = "6390af70cd8376b56d7657f2";
  const friends = useSelector((state) => state.user.friends);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const getFriends = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/users/${_id}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    if (data.error) return;
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="followers-container">
      <div className="followers-title">
        <h3>Following</h3>
      </div>
      <div className="following-container">
        {friends &&
          friends.map((friend, index) => (
            <Friend key={index} friend={friend} />
          ))}
      </div>
    </div>
  );
};

export default Followers;
