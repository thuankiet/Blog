import React from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

function RecentPosts(props) {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={require("../../../blogPostimages/memories-from.jpg")}
            alt="blog"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>posted on June 25, 2020 By Thuan Kiet Blogging Tips</span>
          <p>
            Midst first it, you're multiply divided. There don't, second his one
            given the he one third rule fruit, very. Fill. Seed give firmament
            doesn't land, isn't lesser creeping. Abundantly you called signs
            waters yielding he cattle greater were evenin...
          </p>
          <button>Read More</button>
        </div>
      </Card>

      <Card style={{ marginBottom: "20px" }}>Post 2</Card>
    </div>
  );
}

export default RecentPosts;
