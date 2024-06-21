import React from "react";
import styles from "./PostItem.module.css";

function PostItem({ post, onClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.title}>{post.title}</div>
      <p className={styles.author}>
        By {post.author} on {post.date}
      </p>
      <hr />
    </div>
  );
}

export default PostItem;
