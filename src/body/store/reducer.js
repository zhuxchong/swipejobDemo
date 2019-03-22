import * as constants from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "",
  companyName: "",
  wagePerHour: "",
  workHour: [],
  location: "",
  branch: "",
  workPeriod: "",
  branchPhoneNumber: "",
  page: 1,
  totalPage: 1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DETAIL_GET:
      return state.merge({
        title: action.title,
        companyName: action.companyName,
        wagePerHour: action.wagePerHour,
        workHour: action.workHour,
        location: action.location,
        branch: action.branch,
        workPeriod: action.workPeriod,
        branchPhoneNumber: action.branchPhoneNumber,
        totalPage: action.totalPage
      });
    case constants.CHANGE_PAGE:
      return state.merge({
        page: action.page
      });

    default:
      return state;
  }
};
