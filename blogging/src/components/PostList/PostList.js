import React from "react";
import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";

function PostList({ posts, onPostClick }) {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onClick={() => onPostClick(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
