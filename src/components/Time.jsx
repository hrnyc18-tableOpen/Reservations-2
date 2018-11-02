import React from "react";
import TimeDropDown from "./TimeDropDown";
import Title from "../styles/Title";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title>Time</Title>
        <TimeDropDown
          available={this.props.available}
          setTime={this.props.setTime}
        />
      </div>
    );
  }
}

export default Time;
