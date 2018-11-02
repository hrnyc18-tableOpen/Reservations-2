import React from "react";
import CalendarComponent from "./CalendarComponent";
import DateList from "./DateList.jsx";
import Title from "../styles/Title";

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
    console.log("in hideCalendar");
    this.setState({
      showCalendar: false
    });
  }

  render() {
    return (
      <div>
        <Title>Date</Title>
        <div onClick={this.showCalendar} onChange={this.hideCalendar}>
          {this.state.showCalendar === false ? (
            <DateList dateSelected={this.props.dateSelected} />
          ) : (
            <CalendarComponent
              hideCalendar={this.hideCalendar}
              setDate={this.props.setDate}
            />
          )}
        </div>
      </div>
    );
  }
}

export default DateSelector;
