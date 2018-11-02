import React from "react";
import TimeDropDownOption from "./TimeDropDownOption.jsx";

class TimeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dropDown">
        <select onChange={this.props.setTime}>
          {this.props.available.map((timeSlot, i) => {
            return <TimeDropDownOption timeSlot={timeSlot} key={i} />;
          })}
        </select>
      </div>
    );
  }
}

export default TimeDropDown;
