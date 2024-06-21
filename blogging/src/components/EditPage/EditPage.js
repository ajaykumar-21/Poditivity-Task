import React, { useEffect, useState } from "react";
import PostForm from "../PostForm/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditPage.module.css";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const postToedit = storedPosts.find((post) => post.id === parseInt(id));
    setPost(postToedit);
  }, [id]);

  const savePost = (updatedPost) => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const postIndex = storedPosts.findIndex((post) => post.id === parseInt(id));
    storedPosts[postIndex] = { ...updatedPost, id: parseInt(id) };
    localStorage.setItem("blogPosts", JSON.stringify(storedPosts));
    navigate("/");
  };

  return (
    <div className={styles.conatiner}>
      <h1>EDIT POST</h1>
      {post && <PostForm initialPost={post} onSave={savePost} />}
    </div>
  );
}

export default EditPage;
