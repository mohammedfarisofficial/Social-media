import { useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { setPosts } from "../../state";
//icons
import imageIcon from "../../assets/icons/image-solid.svg";
import diskIcon from "../../assets/icons/compact-disc-solid.svg";
import attachIcon from "../../assets/icons/paperclip-solid.svg";
import microphoneIcon from "../../assets/icons/microphone-solid.svg";
import closeIcon from "../../assets/icons/xmark-solid.svg";
import paperPlaneIcon from "../../assets/icons/paper-plane-solid.svg";
import loadingSpinner from "../../assets/icons/Rolling-1s-200px.svg";

const AddPost = ({ picturePath, userId }) => {
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const handlePost = async () => {
    setIsLoading(true);
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
      setPost(null);
      setIsLoading(false);
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
              <img src={imageIcon} alt="user-icon icon" />
              <h3 className="icon-text">image</h3>
            </div>
            <div className="addpost-clip">
              <img src={diskIcon} alt="disk-icon icon" />
              <h3 className="icon-text">clip</h3>
            </div>
            <div className="addpost-attachment">
              <img src={attachIcon} alt="attach-icon icon" />
              <h3 className="icon-text">attachment</h3>
            </div>
            <div className="addpost-audio">
              <img src={microphoneIcon} alt="microphone-icon icon" />
              <h3 className="icon-text">audio</h3>
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
              ) : isLoading ? (
                <img
                  src={loadingSpinner}
                  onClick={handlePost}
                  alt="send-btn"
                  className="paper-plane-loading"
                />
              ) : (
                <img
                  src={paperPlaneIcon}
                  onClick={handlePost}
                  alt="send-btn"
                  className="paper-plane-loading"
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
