import "./style.scss";
import Post from "../Post/Post";
const PostFeed = () => {
  const posts = [
    {
      _id: 1,
      name: "Bella Hadid",
      location: "Washington, D.C., United States",
      description: "Whatever is good for your soul, do that",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFLzEzuEP7gh3AZqs_EhFKXdfLkVZSnXB2Q&usqp=CAU",
      postImg:
        "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/TI9PskSvcR6oAkQacqHJrYLDDoY=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/MISROT2HANE3JNYVFRWOJWJ2SE.jpeg",
    },
    {
      _id: 2,
      name: "Ariana Grande",
      location: "American, Italian",
      description: "Even the stars were jealous of the sparkle in her eyes",
      profileImg:
        "https://cdn.britannica.com/92/211792-050-E764F875/American-singer-Ariana-Grande-2018.jpg",
      postImg:
        "https://www.billboard.com/wp-content/uploads/media/Ariana-Grande-5-bb27-2018-feat-billboard-airgbghejr-1240.jpg?w=1024",
    },
    {
      _id: 3,
      name: "Hero Fiennes Tiffin",
      location: "London, United Kingdom",
      description: "A sass a day keeps the basics away",
      profileImg:
        "https://www.j-14.com/wp-content/uploads/2022/09/hero-fiennes-tiffin.jpg?resize=800%2C800&quality=86&strip=all",
      postImg:
        "https://imgs.capitalfm.com/images/246923?crop=16_9&width=660&relax=1&signature=dZx6CpzQ2ZsfKC1tZ3cCVVv_-xg=",
    },
    {
      _id: 4,
      name: "Ian Somerhalder",
      location: "Covington, Louisiana, United States",
      description: "Vodka may not be the answer but it’s worth a shot",
      profileImg:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/11/50/pa-11656163.jpg",
      postImg:
        "https://pbs.twimg.com/media/FA83T_AVkAIKXKe.jpg",
    },
  ];
  return (
    <div className="postfeed-container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
