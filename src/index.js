import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import axios from "axios";
import PartySize from "./components/PartySize.jsx";
import Time from "./components/Time.jsx";
import FindTable from "./components/FindTable.jsx";
import SpecialOffers from "./components/SpecialOffers.jsx";
import DateSelector from "./components/DateSelector.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      available: [],
      partysize: 1,
      time: "5:30"
      // timesbooked: 415
    };

    this.setPartySize = this.setPartySize.bind(this);
    this.setTime = this.setTime.bind(this);
    this.hourGenerator = this.hourGenerator.bind(this);
    // this.addToTimesBooked = this.addToTimesBooked.bind(this);
  }

  componentDidMount() {
    var times = this.hourGenerator();
    this.setState({
      available: times
    });
  }

  hourGenerator() {
    var quarterHours = ["00", "15", "30", "45"];
    var times = [];
    for (var i = 5; i < 12; i++) {
      for (var j = 0; j < 4; j++) {
        times.push(i + ":" + quarterHours[j]);
      }
    }

    return times;
  }

  setPartySize(e) {
    var value = e.target.value;
    this.setState({
      partysize: value
    });
  }

  setTime(e) {
    var value = e.target.value;
    this.setState({
      time: value
    });
  }

  // addToTimesBooked() {
  //   var value = (this.state.timesbooked += 1);
  //   this.setState({
  //     timesbooked: value
  //   });
  // }

  render() {
    return (
      <div>
        {/* <div>Hello {this.props.name}</div>; */}
        <h3>Make A Reservation </h3>
        <div>
          <PartySize
            setPartySize={this.setPartySize}
            partysize={this.state.partysize}
          />
        </div>
        <div>
          <DateSelector />
        </div>
        <div>
          <Time
            setTime={this.setTime}
            time={this.state.time}
            available={this.state.available}
          />
        </div>
        <div>
          <FindTable
            timesbooked={this.state.timesbooked}
            // addToTimesBooked={this.addToTimesBooked}
          />
        </div>
        <div>
          <SpecialOffers />
        </div>
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);
