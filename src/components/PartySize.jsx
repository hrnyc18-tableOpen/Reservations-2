import React from "react";
import PartySizeDropDown from "./PartySizeDropDown.jsx";
import Title from "../styles/Title";

class PartySize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title>Party Size</Title>
        <PartySizeDropDown
          setPartySize={this.props.setPartySize}
          partySizeOptions={this.props.partySizeOptions}
        />
      </div>
    );
  }
}

export default PartySize;
