import React from "react";
import PostForm from "../PostForm/PostForm";
import { useNavigate } from "react-router-dom";
import styles from "./PostPage.module.css";

function PostPage() {
  const navigate = useNavigate();

  const savePost = (post) => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; // Retrieve the stored data from localStorage and If there are no stored data, initialize with an empty array.
    post.id = Date.now(); //This ensures each post has a unique ID based on the time it was created.
    storedPosts.push(post); //This appends the new post object to the end of the array.
    localStorage.setItem("blogPosts", JSON.stringify(storedPosts)); // JSON.stringify converts the data array into a JSON string format.
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
