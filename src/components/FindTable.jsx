import React from "react";
import FindTableButton from "./FindTableButton.jsx";
import FindTableResults from "./FindTableResults.jsx";
import TimesBookedToday from "./TimesBookedToday.jsx";

class FindTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimes: false
    };
    this.setShowTimes = this.setShowTimes.bind(this);
  }

  setShowTimes() {
    this.setState({
      showTimes: true
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.setShowTimes}>
          {this.state.showTimes === false ? (
            <FindTableButton />
          ) : (
            <FindTableResults />
          )}
        </div>
        <TimesBookedToday timesbooked={this.props.timesbooked} />
      </div>
    );
  }
}

export default FindTable;
