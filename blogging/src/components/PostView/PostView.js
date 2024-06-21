import React from "react";
import styles from "./PostView.module.css";

function PostView({ post }) {
  return (
    <div className={styles.conatiner}>
      <h1>{post.title}</h1>
      <h4>
        By {post.author} on {post.date}
      </h4>
      <p>{post.content}</p>
    </div>
  );
}

export default PostView;
