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
    this.setState({
      date: date
    });
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          minDetail="Month"
        />
      </div>
    );
  }
}

export default CalendarComponent;
