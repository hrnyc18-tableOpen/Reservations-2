import React from "react";

class TimeDropDownOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <option value={this.props.timeSlot}>{this.props.timeSlot}</option>;
  }
}

export default TimeDropDownOption;
