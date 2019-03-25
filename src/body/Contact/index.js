import React from "react";
import { ContactWrapper } from "./style";
const Contact = props => {
  const { branch, branchPhoneNumber } = props;
  return (
    <ContactWrapper>
      <h4>Branch</h4>
      <h4 className="branch">{branch}</h4>
      <p className="branchPhoneNumber">{`(${branchPhoneNumber}) 922-4240`} </p>
    </ContactWrapper>
    //<div>123{console.log(props)}</div>
  );
};
export default Contact;
