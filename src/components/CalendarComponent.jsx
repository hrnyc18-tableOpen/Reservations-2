import React from "react";
import Calendar from "react-calendar";

class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.changeDate = this.changeDate.bind(this);
  }

  // onChange = (date) => this.setState({ date });

  changeDate(date) {
    console.log("date changed to " + date);
    this.setState({
      date: date
    });
  }

  render() {
    return (
      <div className="calendar">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          minDetail="month"
          onChange={this.props.hideCalendar}
          onClickDay={(value) => this.props.setDate(value)}
          // onChange={this.props.hideCalendar}
        />
      </div>
    );
  }
}

export default CalendarComponent;
