import React from "react";

class PartySizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <select>
          <option value={1}>For 1</option>
          <option selected="selected" value={2}>
            For 2
          </option>
          <option value={3}>For 3</option>
          <option value={4}>For 4</option>
          <option value={5}>For 5</option>
          <option value={6}>For 6</option>
          <option value={7}>For 7</option>
          <option value={8}>For 8</option>
          <option value={9}>For 9</option>
          <option value={10}>For 10</option>
        </select>
      </div>
    );
  }
}

export default PartySizeDropDown;
