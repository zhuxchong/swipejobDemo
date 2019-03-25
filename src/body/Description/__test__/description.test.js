import React from "react";
import { shallow } from "enzyme";
import Description from "../index";
require("../../../setupTest");
const props = {
  title: "Construction and Releated Workers - General",
  companyName: "C.D. Barnes and Associates",
  wagePerHour: "$8.38/hour",
  workPeriod: "Mon, Sep 05 - Fri, Sep 16"
};
let wrapper;
describe("Description component", () => {
  beforeEach(() => {
    wrapper = shallow(<Description {...props} />);
  });
  it("component should render correct value", () => {
    expect(wrapper.find(".title").text()).toEqual(props.title);
  });
  it("should render the component to match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("component should render correct value", () => {
    expect(wrapper.find(".companyName").text()).toEqual(props.companyName);
  });

  it("component should render correct value", () => {
    expect(wrapper.find(".workPeriod").text()).toEqual(props.workPeriod);
  });
});
