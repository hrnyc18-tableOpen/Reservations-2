import React from "react";
import FindTableButton from "./FindTableButton";
import FindTableResultsList from "./FindTableResultsList.jsx";

class FindTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimes: false
    };
    this.setShowTimes = this.setShowTimes.bind(this);
  }

  setShowTimes(e) {
    e.preventDefault();
    this.setState({
      showTimes: true
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.setShowTimes}>
          {this.state.showTimes === false ? (
            <FindTableButton>Find A Table</FindTableButton>
          ) : (
            <FindTableResultsList
              suggestedReservations={this.props.suggestedReservations}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FindTable;
