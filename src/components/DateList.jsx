import React from "react";

class DateList extends React.Component {
  constructor(props) {
    super(props);
  }

  // "2018-10-10";

  showDay() {
    var date = this.props.dateSelected;
  }

  render() {
    return (
      <div>
        <select className="dropDown">
          <option value={""}>Today</option>
        </select>
      </div>
    );
  }
}

export default DateList;
