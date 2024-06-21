import React, { useEffect, useState } from "react";
import PostView from "../PostView/PostView";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ViewPage.module.css";

function ViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const postToView = storedPosts.find((post) => post.id === parseInt(id));
    setPost(postToView);
  }, [id]);

  const deletePost = () => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const updatedPosts = storedPosts.filter((p) => p.id !== parseInt(id));
    console.log(updatedPosts, id);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      {post && (
        <div className={styles.wrapper}>
          <PostView post={post} />
          <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
          <button onClick={deletePost}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ViewPage;
