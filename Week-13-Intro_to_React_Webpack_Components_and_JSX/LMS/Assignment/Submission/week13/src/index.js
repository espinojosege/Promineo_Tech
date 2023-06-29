import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import NavBar from "./components/navbar";
import Loging from "./components/login";
import Video from "./components/video";
//import PageLogIn from "./components/page";
import reportWebVitals from "./reportWebVitals";

export default class NavBar extends React.Component {
  handleWeek13() {
    body.render(<Loging />);
  }

  handleAssignment() {
    body.render(<Video />);
  }

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="#" id="week13" onClick={this.handleWeek13}>
              Week 13 Assignment
            </a>
          </li>
          <li>
            <a href="#" id="assignment" onClick={this.handleAssignment}>
              Assignment Video
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavBar />
  //<React.StrictMode>
  /*<App />*/
  /*</React.StrictMode>*/
);

const body = ReactDOM.createRoot(document.getElementById("body"));
body.render(<Loging />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
