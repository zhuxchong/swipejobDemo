import React from "react";
import { shallow } from "enzyme";
import Contact from "../index";
require("../../../setupTest");
const props = {
  //   title: "Construction and Releated Workers - General",
  //   companyName: "C.D. Barnes and Associates",
  //   wagePerHour: "$8.38/hour",
  //   workPeriod: "Mon, Sep 05 - Fri, Sep 16",
  branch: "Tacoma",
  branchPhoneNumber: "(253) 922-4240"
};
let wrapper;
describe("Description component", () => {
  beforeEach(() => {
    wrapper = shallow(<Contact {...props} />);
  });
  it("component should render correct value", () => {
    expect(wrapper.find(".branch").text()).toEqual(props.branch);
  });

  it("should render the component to match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
