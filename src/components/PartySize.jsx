import React from "react";
import PartySizeDropDown from "./PartySizeDropDown.jsx";

class PartySize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Party Size</h3>
        <PartySizeDropDown />
      </div>
    );
  }
}

export default PartySize;
