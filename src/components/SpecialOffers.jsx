import React from "react";

class SpecialOffers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Special offers available.
        <span>
          <a href="" className="link">
            {" "}
            See Details
          </a>
        </span>
      </div>
    );
  }
}

export default SpecialOffers;
