import React from "react";

class TimesBookedToday extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Booked {this.props.timesbooked} times today</div>;
  }
}

export default TimesBookedToday;
