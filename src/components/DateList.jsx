import React from "react";

class DateList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <select>
          <option value={""}>Today</option>
        </select>
      </div>
    );
  }
}

export default DateList;
