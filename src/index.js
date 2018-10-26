import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import axios from "axios";
import PartySize from "./components/PartySize.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Hello {this.props.name}</div>;<h1>Make A Reservation</h1>
        <PartySize partysize={partysize} setPartySize={this.setPartySize} />
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);
