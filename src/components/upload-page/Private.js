import React, { useState } from "react";
import UploadButton from "./UploadButton";
import DisplayJSON from "./DisplayJSON";

const Private = () => {
  let [content, setContent] = useState();

  function handleContentChange(content) {
    setContent(content);
  }

  return (
    <div>
      {content ? (
        <DisplayJSON content={content} />
      ) : (
        <UploadButton handleChange={handleContentChange} />
      )}
    </div>
  );
};

export default Private;
