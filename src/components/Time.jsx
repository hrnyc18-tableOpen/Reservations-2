import React from "react";
import TimeDropDown from "./TimeDropDown";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Time</h3>
        <TimeDropDown available={this.props.available} />
      </div>
    );
  }
}

export default Time;
