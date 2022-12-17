import AboutCard from "../../components/AboutCard/AboutCard";
import AddPost from "../../components/AddPost/AddPost";
import Followers from "../../components/Followers/Followers";
import PostFeed from "../../components/PostFeed/PostFeed";
import Sponsored from "../../components/Sponsored/Sponsored";
import Layout from "../Layout/Layout";
import "./style.scss";
import { useWindowWidth } from "@react-hook/window-size";

const HomePage = () => {
  const width = useWindowWidth();
  return (
    <Layout>
      <div className="home-container">
        {width > 1024 && (
          <div className="about">
            <AboutCard />
          </div>
        )}

        <div className="feed">
          <AddPost />
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
