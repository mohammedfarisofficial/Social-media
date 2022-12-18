import "./style.scss";

const Friend = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";
  return (
    <div className="friend-container">
      <div className="profile">
        <img src={imageURL} alt="" />
      </div>
      <div className="title">
        <h3>Mohammed Faris</h3>
        <p>Hacker</p>
      </div>
      <div className="icon">
        <p>icon</p>
      </div>
    </div>
  );
};

export default Friend;
