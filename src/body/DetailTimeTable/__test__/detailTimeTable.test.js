import React from "react";
import { shallow } from "enzyme";
import DetailTimeTable from "../index";
require("../../../setupTest");
const props = {
  //   title: "Construction and Releated Workers - General",
  //   companyName: "C.D. Barnes and Associates",
  //   wagePerHour: "$8.38/hour",
  //   workPeriod: "Mon, Sep 05 - Fri, Sep 16",
  handleChagePage: jest.fn(),
  handChagePage: jest.fn(),
  page: 1,
  totalPage: 3,
  workHour: [
    ["Mon", "Sep", "05", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"],
    ["Tue", "Sep", "06", "7 AM"]
  ]
};
let wrapper;
describe("DetailTimeTable component", () => {
  beforeEach(() => {
    wrapper = shallow(<DetailTimeTable {...props} />);
  });
  it("should render the component to match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should trigger the correct function callbacks", () => {
    const btn = wrapper.find(".antButton").simulate("click");
    expect(props.handChagePage).toHaveBeenCalled();
  });
  it("should render correct items and time for each", () => {
    const pList = wrapper.find(".detailTime");
    expect(pList.length).toEqual(4);
  });
});
