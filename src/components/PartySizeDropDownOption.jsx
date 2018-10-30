import React from "react";

class PartySizeDropDownOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={parseInt(this.props.party)}>For {this.props.party}</option>
    );
  }
}

export default PartySizeDropDownOption;
