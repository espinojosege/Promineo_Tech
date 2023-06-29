import React from "react";
import Password from "./password";
import Username from "./username";

export default class Loging extends React.Component {
  render() {
    return (
      <div className="login">
        <h3>Log In</h3>
        <Username />
        <Password />
      </div>
    );
  }
}
