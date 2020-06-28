import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import Sidebar from "../../components/Sidebar";
import RencentPosts from "./RecentPosts";

import blogData from "../../data/blog.json";

function ImageGallary(props) {
  return (
    <div className="gallaryPost" style={props.gallaryStyle}>
      <section style={{ width: "70%" }}>
        <div className="mainImageWrapper">
          <img
            src={require("../../blogPostimages/" + props.imagesArray[0])}
            alt="blog"
            style={{ width: "100%" }}
          />
        </div>
      </section>
      <section className={"sideImageWrapper"} style={{ width: "30%" }}>
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostimages/" + props.imagesArray[1])}
        />
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostimages/" + props.imagesArray[2])}
        />
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostimages/" + props.imagesArray[3])}
        />
      </section>
    </div>
  );
}

function SideImage(props) {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="blog" />
    </div>
  );
}

function Home(props) {
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = gallaryHeight / 3;

  const imgAr = blogData.data.map((post) => post.blogImage);

  return (
    <div>
      <Card>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
          imagesArray={imgAr}
        />
      </Card>

      <section className="HomeContainer">
        <RencentPosts style={{ width: "70%", color: "red" }} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;
