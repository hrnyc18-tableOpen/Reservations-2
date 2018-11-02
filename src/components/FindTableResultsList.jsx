import React from "react";
import FindTableResultsListItem from "./FindTableResultsListItem";

class FindTableResultsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="selectTimeText">Select a time:</div>
        <ul>
          {this.props.suggestedReservations.map((reservation, i) => {
            return (
              <FindTableResultsListItem reservation={reservation} key={i} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FindTableResultsList;
