import "./style.scss";

const Sponsored = () => {
  const imageURL =
    "https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/logos/OG_image_Squid_Ink.png";

  return (
    <div className="sponsored-container">
      <div className="title-container">
        <h2>Sponsored</h2>
        <p>Create Ad</p>
      </div>
      <div className="image-container">
        <img src={imageURL} alt="" />
      </div>
      <div className="text-container">
        <div className="top-container">
          <h3>Amazone Ads</h3>
          <p>www.amazone.com</p>
        </div>
        <p>
          Advertising helps drive sales, build your brand, and engage customers
          on and off Amazon.
        </p>
      </div>
    </div>
  );
};

export default Sponsored;
