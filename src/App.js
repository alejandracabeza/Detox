import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import UploadButton from "./UploadButton";
import DisplayJSON from "./DisplayJSON";
import Navbar from "./Navbar";
import DisplayStories from "./StoriesViewer/DisplayStories";

function App() {
  let [content, setContent] = useState();
  let [stories, setStories] = useState();

  function handleContentChange(content) {
    setContent(content);
  }

  function handleStoriesChange(stories) {
    setStories(stories);
  }

  if (content) {
    return <DisplayJSON content={content} />;
  } else if (stories) {
    return <DisplayStories stories={stories} />;
  } else if (!content) {
    return <UploadButton />;
  }

  return (
    <div className="App">
      <Navbar />
      <UploadButton
        handleChange={handleContentChange}
        handleStories={handleStoriesChange}
      />
    </div>
  );
}

export default App;
