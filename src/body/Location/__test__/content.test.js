import React from "react";
import { shallow } from "enzyme";
import Location from "../index";
require("../../../setupTest");
const props = {
  //   title: "Construction and Releated Workers - General",
  //   companyName: "C.D. Barnes and Associates",
  //   wagePerHour: "$8.38/hour",
  //   workPeriod: "Mon, Sep 05 - Fri, Sep 16",
  location: "123 Main Street, Tacoma, WA 98409"
};
let wrapper;
describe("Description component", () => {
  beforeEach(() => {
    wrapper = shallow(<Location {...props} />);
  });
  it("component should render correct value", () => {
    expect(wrapper.find(".detailLocation").text()).toEqual(
      "123 Main Street, Tacoma, WA 98409"
    );
  });
  it("should render the component to match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
