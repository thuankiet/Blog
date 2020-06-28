import React, { useState, useEffect } from "react";
import "./style.css";
import blogPost from "../../data/blog.json";

import Card from "../UI/Card";

function BlogPost(props) {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });

  const [postId, setPostId] = useState("");

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((post) => parseInt(postId) === post.id);
    setPostId(postId);
    setPost(post);
  }, [post, postId]);

  if (post.blogImage === "") return null;

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            posted on {post.postedOn} by {post.author}
          </span>
        </div>

        <div className="postImageContainer">
          <img
            src={require("../../blogPostimages/" + post.blogImage)}
            alt="PostImage"
          />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
}

export default BlogPost;
