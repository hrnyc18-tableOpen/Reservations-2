import React from "react";
import PartySizeDropDownOption from "./PartySizeDropDownOption.jsx";

class PartySizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <select onChange={this.props.setPartySize}>
          {this.props.partySizeOptions.map((party, i) => {
            return <PartySizeDropDownOption party={party} key={i} />;
          })}
        </select>
      </div>
    );
  }
}

export default PartySizeDropDown;
