import React from "react";
import PartySize from "./PartySize";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partysize: ""
    };

    this.setPartySize = this.setPartySize.bind(this);
  }

  setParySize(e) {
    var value = e.target.value;
    this.setState({
      partysize: value
    });
  }

  render() {
    return (
      <div>
        <h1>Make A Reservation</h1>
        <PartySize partysize={partysize} setPartySize={this.setPartySize} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
