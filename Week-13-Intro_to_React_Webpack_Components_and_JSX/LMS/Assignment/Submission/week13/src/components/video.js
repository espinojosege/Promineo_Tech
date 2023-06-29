import React from "react";

export default class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <video controls width="100%" src="assignment.mp4" />
      </div>
    );
  }
}
