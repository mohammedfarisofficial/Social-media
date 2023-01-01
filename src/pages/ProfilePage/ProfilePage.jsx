import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import "./style.scss";
import AboutCard from "../../components/AboutCard/AboutCard";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import PostFeed from "../../components/PostFeed/PostFeed";
import { useWindowWidth } from "@react-hook/window-size";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const width = useWindowWidth();
  const isMobile = Boolean(width < 1024);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <div
        className={
          isMobile
            ? "profile-page-container is-mobile"
            : "profile-page-container"
        }
      >
        <AboutCard userId={userId} picturePath="p1.jpeg" />
        <PostFeed isProfile={true} />
      </div>
    </Layout>
  );
};

export default ProfilePage;
