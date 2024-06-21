import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import PostPage from "./components/PostPage/PostPage";
import ViewPage from "./components/ViewPage/ViewPage";
import EditPage from "./components/EditPage/EditPage";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navBar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/add">
          Add Post
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<PostPage />} />
        <Route path="/post/:id" element={<ViewPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
