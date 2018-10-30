import React from "react";
import CalendarComponent from "./CalendarComponent";
import DateList from "./DateList.jsx";

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false
    };
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
  }

  showCalendar() {
    this.setState({
      showCalendar: true
    });
  }

  hideCalendar() {
    this.setState({
      showCalendar: false
    });
  }

  render() {
    return (
      <div>
        <h3>Date</h3>
        <div onClick={this.showCalendar} onChange={this.hideCalendar}>
          {this.state.showCalendar === false ? (
            <DateList />
          ) : (
            <CalendarComponent />
          )}
        </div>
      </div>
    );
  }
}

export default DateSelector;
