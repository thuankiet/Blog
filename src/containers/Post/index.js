import React from "react";
import "./style.css";

import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/Sidebar";

function Post(props) {
  return (
    <section className="container">
      <BlogPost {...props} />
      <Sidebar {...props} />
    </section>
  );
}

export default Post;
