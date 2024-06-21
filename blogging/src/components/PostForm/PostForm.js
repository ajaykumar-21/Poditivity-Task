import React, { useState, useEffect } from "react";
import styles from "./PostForm.module.css";

function PostForm({ initialPost, onSave }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, author, content, date });
  };

  useEffect(() => {
    if (initialPost) {
      setTitle(initialPost.title);
      setAuthor(initialPost.author);
      setContent(initialPost.content);
      setDate(initialPost.date);
    }
  }, [initialPost]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <input
          type="date"
          className={styles.inputDate}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Summary"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          required
        />
        <br />
        <div className={styles.wrapperButton}>
          <button type="submit">Save Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
