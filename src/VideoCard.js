import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div class="videoCard">
      <h1>Hello</h1>
      <img
        src="https://i.insider.com/5e27113024306a44bd351a4e?width=1136&format=jpeg"
        alt=""
      />
      <p>This is a film about coding.</p>
      <h2>Movie title</h2>
      <p>Number of likes</p>
    </div>
  );
}

export default VideoCard;
