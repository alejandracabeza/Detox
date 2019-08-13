import React from "react";

function Dashboard() {
  return (
    <div className="icon-container">
      <div>
        <img
          src={require("./../assets/messagesIcon.png")}
          alt="icon"
          className="eachIcon"
        />
      </div>
      <div>
        <img
          src={require("./../assets/photosIcon.png")}
          alt="icon"
          className="eachIcon"
        />
      </div>
      <div>
        <img
          src={require("./../assets/storiesIcon.png")}
          alt="icon"
          className="eachIcon"
        />
      </div>
      <div>
        <img
          src={require("./../assets/profileIcon.png")}
          alt="icon"
          className="eachIcon"
        />
      </div>
      <div>
        <img
          src={require("./../assets/videosIcon.png")}
          alt="icon"
          className="eachIcon"
        />
      </div>
      <div>
        <img
          src={require("./../assets/postsIcon.png")}
          alt="icon"
          className="eachIcon"
        />
      </div>
    </div>
  );
}

export default Dashboard;
