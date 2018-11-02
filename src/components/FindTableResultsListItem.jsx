import React from "react";
import TimeButton from "../styles/TimeButton";
// import styled from "styled-components";

// const FindTableResultsListItem = styled.button`
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 1rem;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: rgb(218, 55, 67);
//   color: white;
// `;

class FindTableResultsListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TimeButton value={this.props.reservation}>
        {this.props.reservation}
      </TimeButton>
    );
  }
}

export default FindTableResultsListItem;
