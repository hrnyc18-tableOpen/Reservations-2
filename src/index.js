import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import axios from "axios";
import PartySize from "./components/PartySize.jsx";
import Time from "./components/Time.jsx";
import FindTable from "./components/FindTable.jsx";
import SpecialOffers from "./components/SpecialOffers.jsx";
import DateSelector from "./components/DateSelector.jsx";
import Heading from "./styles/Heading";
import TimesBookedToday from "./components/TimesBookedToday.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      available: [],
      timesbooked: 415,
      dateSelected: "1",
      partySizeOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      partysize: 1,
      time: "5:30",
      suggestedReservations: ["7:00", "7:15", "8:30", "8:45", "9:00"]
      // timesbooked: 415
    };

    this.setPartySize = this.setPartySize.bind(this);
    this.setTime = this.setTime.bind(this);
    this.hourGenerator = this.hourGenerator.bind(this);
    this.setDate = this.setDate.bind(this);
    this.getEndPoint = this.getEndPoint.bind(this);
  }

  // change date to workable thing JSON.stringify(value).slice(1, 11)

  componentDidMount() {
    var times = this.hourGenerator();
    this.setState({
      available: times
    });

    this.getEndPoint(
      this.state.time,
      this.state.partysize,
      this.state.dateSelected
    );
  }

  getEndPoint(time, partysize, dateSelected) {
    let url = window.location.href.split("/")[3];
    console.log(url);
    axios.get(`/restaurants/${url}`, {
      params: { time: time, partysize: partysize, dateSelected: dateSelected }
    });

    // axios.get("/test");
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
    console.log("in set party size");
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

  setDate(value) {
    this.setState({
      dateSelected: value
    });
  }

  render() {
    return (
      <div className="main">
        {/* <div>Hello {this.props.name}</div>; */}
        <Heading>Make A Reservation </Heading>
        <div className="partySize">
          <PartySize
            setPartySize={this.setPartySize}
            partySizeOptions={this.state.partySizeOptions}
          />
        </div>
        <div className="date">
          <DateSelector
            setDate={this.setDate}
            dateSelected={this.state.dateSelected}
          />
        </div>
        <div className="time">
          <Time
            setTime={this.setTime}
            time={this.state.time}
            available={this.state.available}
          />
        </div>
        <div>
          <FindTable
            timesbooked={this.state.timesbooked}
            suggestedReservations={this.state.suggestedReservations}
            // addToTimesBooked={this.addToTimesBooked}
          />
        </div>
        <br />
        <div className="dayRuined timesBooked">
          <TimesBookedToday timesbooked={this.state.timesbooked} />
        </div>
        <div className="specials">
          <SpecialOffers />
        </div>
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);
