import React, { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; // Retrieve the stored data from localStorage and If there are no stored data, initialize with an empty array.
    setPosts(storedPosts);
  }, []);

  const handlePostClick = (id) => {
    navigate(`/post/${id}`); // Navigate to the view page of the updated post with post ID.
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>BLOG POSTS</h1>
        <PostList posts={posts} onPostClick={handlePostClick} />
      </div>
    </div>
  );
}

export default HomePage;
