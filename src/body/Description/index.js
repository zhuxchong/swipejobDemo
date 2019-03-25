import React from "react";
import { DescriptionComponent, DetailDescription, Pict } from "./style";
const Description = props => {
  const { title, companyName, wagePerHour, workPeriod } = props;
  return (
    <DescriptionComponent>
      <Pict />
      <DetailDescription>
        <h3 className="title">{title}</h3>
        <h4 className="companyName">{companyName}</h4>
        <p className="wagePerHour">{`$${wagePerHour}/hour`}</p>
        <p className="workPeriod">{workPeriod}</p>
      </DetailDescription>
    </DescriptionComponent>
    //<div>123{console.log(props)}</div>
  );
};
export default Description;
