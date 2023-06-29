import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="#" id="week13">
              Week 13 Assignment
            </a>
          </li>
          <li>
            <a href="#" id="assignment">
              Assignment Video
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
