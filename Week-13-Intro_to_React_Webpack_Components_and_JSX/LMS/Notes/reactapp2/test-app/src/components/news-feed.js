import React from "react";
import Post from "./post";

let e = React.createElement;

export default class newsFeed extends React.Component {
  render() {
    return (
      <div className="container">
        <Post />
        <Post />
        <Post />
      </div>
    );
    /*    return e(
      "div",
      { class: "container" },
      e(Post, {}, null),
      e(Post, {}, null),
      e(Post, {}, null)
    );*/
  }
}
