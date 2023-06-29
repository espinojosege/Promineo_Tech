import React from "react";

export default class Password extends React.Component {
  render() {
    return (
      <div className="input">
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
      </div>
    );
  }
}
