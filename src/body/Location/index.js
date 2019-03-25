import React from "react";
import { LocationWrapper } from "./style";
const Location = props => {
  const { location } = props;
  return (
    <LocationWrapper>
      <h4>Location</h4>
      <p className="detailLocation">{location}</p>
    </LocationWrapper>
    //<div>123{console.log(props)}</div>
  );
};
export default Location;
