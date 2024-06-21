import React, { useEffect, useState } from "react";
import PostForm from "../PostForm/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditPage.module.css";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; // Retrieve the stored data from localStorage and If there are no stored data, initialize with an empty array.
    const postToedit = storedPosts.find((post) => post.id === parseInt(id)); // Find the post that matches the ID parameter from the URL.
    setPost(postToedit);
  }, [id]);

  const savePost = (updatedPost) => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; // Retrieve the stored data from localStorage and If there are no stored data, initialize with an empty array.
    const postIndex = storedPosts.findIndex((post) => post.id === parseInt(id)); //Find the index of the post that matches the ID parameter from the URL and The findIndex method returns the index of the first element that satisfies.
    storedPosts[postIndex] = { ...updatedPost, id: parseInt(id) }; // Update the post at the found index with the new post data.
    localStorage.setItem("blogPosts", JSON.stringify(storedPosts)); // JSON.stringify converts the data array into a JSON string format. Set the Updated data in the local storage.
    navigate("/"); // once the data is updated then navigate to the Home Page
  };

  return (
    <div className={styles.conatiner}>
      <h1>EDIT POST</h1>
      {post && <PostForm initialPost={post} onSave={savePost} />}
    </div>
  );
}

export default EditPage;
