import React from "react";
import { DescriptionComponent, DetailDescription, Pict } from "./style";
const Description = props => {
  const { title, companyName, wagePerHour, workPeriod } = props;
  return (
    <DescriptionComponent>
      <Pict />
      <DetailDescription>
        <h3>{title}</h3>
        <h4>{companyName}</h4>
        <p>{`$${wagePerHour}/hour`}</p>
        <p>{workPeriod}</p>
      </DetailDescription>
    </DescriptionComponent>
    //<div>123{console.log(props)}</div>
  );
};
export default Description;
