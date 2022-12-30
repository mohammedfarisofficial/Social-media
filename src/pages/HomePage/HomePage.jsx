import AboutCard from "../../components/AboutCard/AboutCard";
import AddPost from "../../components/AddPost/AddPost";
import Followers from "../../components/Followers/Followers";
import PostFeed from "../../components/PostFeed/PostFeed";
import Sponsored from "../../components/Sponsored/Sponsored";
import Layout from "../Layout/Layout";
import "./style.scss";
import { useWindowWidth } from "@react-hook/window-size";
import { useSelector } from "react-redux";

const HomePage = () => {
  const width = useWindowWidth();
  const { _id, picture2 } = useSelector((state) => state.user);
  return (
    <Layout>
      <div className="home-container">
        {width > 1024 && (
          <div className="about">
            <AboutCard userId={_id} picturePath={picture2} />
          </div>
        )}

        <div className="feed">
          <AddPost userId={_id} picturePath={picture2} />
          <PostFeed />
        </div>
        {width > 1024 && (
          <div className="sponsored">
            <Sponsored />
            <Followers />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
