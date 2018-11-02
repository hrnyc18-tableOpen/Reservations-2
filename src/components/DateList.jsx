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
      <div class="dropDown">
        <select>
          <option value={""}>Today</option>
        </select>
      </div>
    );
  }
}

export default DateList;
