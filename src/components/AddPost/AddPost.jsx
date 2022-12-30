import { useState } from "react";
import "./style.scss";
import Dropzone from "react-dropzone";
//icons
import imageIcon from "../../assets/icons/image-solid.svg";
import diskIcon from "../../assets/icons/compact-disc-solid.svg";
import attachIcon from "../../assets/icons/paperclip-solid.svg";
import microphoneIcon from "../../assets/icons/microphone-solid.svg";
import closeIcon from "../../assets/icons/xmark-solid.svg";
import paperPlaneIcon from "../../assets/icons/paper-plane-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";

const AddPost = ({ picturePath, userId }) => {
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [isDropOpen, setIsDropOpen] = useState(false);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const handlePost = async () => {
    const formData = new FormData();
    const base64 = await convertToBase64(image);
    formData.append("userId", userId);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
      formData.append("picture2", base64.toString());
    }
    const response = await fetch(process.env.REACT_APP_API_URL + `/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    try {
      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setImage(null);
      setPost("");
    } catch (error) {
      console.log(error);
    }
  };
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  return (
    <div className="addpost-container">
      <div className="addpost-input">
        <img src={picturePath} alt="user-avatar" />
        <div className="addpost-search">
          <input type="text" onChange={(e) => setPost(e.target.value)} />
        </div>
      </div>
      <div className="addpost-media">
        {!isDropOpen && (
          <>
            <div onClick={() => setIsDropOpen(true)} className="addpost-image">
              <img src={imageIcon} alt="user-icon" />
              <h3>image</h3>
            </div>
            <div className="addpost-clip">
              <img src={diskIcon} alt="disk-icon" />
              <h3>clip</h3>
            </div>
            <div className="addpost-attachment">
              <img src={attachIcon} alt="attach-icon" />
              <h3>attachment</h3>
            </div>
            <div className="addpost-audio">
              <img src={microphoneIcon} alt="microphone-icon" />
              <h3>audio</h3>
            </div>
          </>
        )}
        {isDropOpen && (
          <div className="dropzone-container">
            <Dropzone
              acceptedFlies=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFlies) => setImage(acceptedFlies[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone-inner" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {!image ? <p>drop image Here</p> : <p>{image.name}</p>}
                </div>
              )}
            </Dropzone>
            <div className="cancel-btn">
              {image === null ? (
                <img
                  src={closeIcon}
                  onClick={() => setIsDropOpen(false)}
                  alt="close-btn"
                />
              ) : (
                <img
                  src={paperPlaneIcon}
                  onClick={handlePost}
                  alt="send-btn"
                  className="paper-plane"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPost;
