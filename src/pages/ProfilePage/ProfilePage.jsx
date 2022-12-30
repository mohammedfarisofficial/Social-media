import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import "./style.scss";
// import { useLocation } from "react-router-dom";
// import PostFeed from "../../components/PostFeed/PostFeed";
import AboutCard from "../../components/AboutCard/AboutCard";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import PostFeed from "../../components/PostFeed/PostFeed";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <div className="profile-page-container">
        <AboutCard userId={userId} picturePath="p1.jpeg" />
        <PostFeed isProfile={true} />
      </div>
    </Layout>
  );
};

export default ProfilePage;
