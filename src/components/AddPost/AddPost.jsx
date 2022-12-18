import "./style.scss";

const AddPost = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";
  return (
    <div className="addpost-container">
      <div className="addpost-input">
        <img src={imageURL} alt="" />
        <div className="addpost-search">
          <input type="text" />
        </div>
      </div>
      <div className="addpost-media">
        <div className="addpost-image">
          <div>G</div><h3>image</h3>
        </div>
        <div className="addpost-clip">
          <div>G</div><h3>clip</h3>
        </div>
        <div className="addpost-attachment">
          <div>G</div><h3>attachment</h3>
        </div>
        <div className="addpost-audio">
          <div>G</div><h3>audio</h3>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
