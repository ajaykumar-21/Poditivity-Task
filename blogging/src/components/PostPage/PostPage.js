import React from "react";
import PostForm from "../PostForm/PostForm";
import { useNavigate } from "react-router-dom";
import styles from "./PostPage.module.css";

function PostPage() {
  const navigate = useNavigate();

  const savePost = (post) => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    post.id = Date.now();
    storedPosts.push(post);
    localStorage.setItem("blogPosts", JSON.stringify(storedPosts));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>ADD NEW POST</h1>
      <PostForm onSave={savePost} />
    </div>
  );
}

export default PostPage;
