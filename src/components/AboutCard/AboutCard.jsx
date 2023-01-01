import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
//comp
import Line from "../Line/Line";
import SocialLink from "../SocialLink/SocialLink";
//icons
import locationIcon from "../../assets/icons/location-dot-solid.svg";
import briefcaseIcon from "../../assets/icons/briefcase-solid.svg";
import settingIcons from "../../assets/icons/gear-solid.svg";

const AboutCard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);
  const isProfile = true;
  const getUser = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/users/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
    picture2,
  } = user;

  return (
    <div className={isProfile ? "about-card profile-card" : "about-card"}>
      <div className="about-profile">
        <img src={picture2} alt="" />
        <div className="about-title-container">
          <h2>
            {firstName} {lastName}
          </h2>
          <p>{friends.length} followers</p>
        </div>
        <div className="about-setting-icon">
          <img src={settingIcons} alt="" />
        </div>
      </div>
      <Line />
      <div className="about-more-details">
        <div className="location-details">
          <div className="icon">
            <img src={locationIcon} alt="location-icon" />
          </div>
          <p>{location}</p>
        </div>
        <div className="occupation-details">
          <div className="icon">
            <img src={briefcaseIcon} alt="briefcase-icon" />
          </div>
          <p>{occupation}</p>
        </div>
      </div>
      <Line />

      <div className="about-reach">
        <div className="about-reach-view">
          <p>Who’s viewed your profile</p>
          <h4>{viewedProfile}</h4>
        </div>
        <div className="about-reach-impressions">
          <p>Impressions of your post</p>
          <h4>{impressions}</h4>
        </div>
      </div>
      <Line />
      <div className="about-social-profile">
        <div className="social-profile-title">
          <h4>Social Profiles</h4>
        </div>
        <SocialLink />
        <SocialLink />
      </div>
    </div>
  );
};

export default AboutCard;
