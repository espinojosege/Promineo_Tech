import React from "react";
import NavBar from "./navbar";
import Loging from "./login";

export default class PageLogIn extends React.Component {
  render() {
    return (
      <div className="pagelogin">
        <NavBar />
        <Loging />
      </div>
    );
  }
}
