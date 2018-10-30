import React from "react";

class TimesBookedToday extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Booked {Math.floor(Math.random() * 100 + 350)} times today</div>
    );
  }
}

export default TimesBookedToday;
