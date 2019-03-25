import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";
export const changePage = page => {
  return {
    type: constants.CHANGE_PAGE,
    page: page
  };
};
export const getDetail = id => {
  return async dispatch => {
    //normally it url should be "/api/detail.json/:id" or "?jobId=id"
    await axios
      .get("/api/detail.json")
      .then(res => {
        const result = res.data;
        const action = dataProcessing(result);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      });
  };
};
const dataProcessing = r => {
  const branch = r.branch;
  const title = r.title;
  const companyName = r.company.name;
  const wagePerHour = (r.wagePerHourInCents / 100).toFixed(2);
  const location = r.company.address;
  const branchPhoneNumber = r.branchPhoneNumber;
  const startDate = new Date(r.shifts[0].startDate)
    .toDateString()
    .split(" ")
    .slice(0, 3);
  const endDate = new Date(r.shifts[r.shifts.length - 1].endDate)
    .toDateString()
    .split(" ")
    .slice(0, 3);
  let workHour = [];
  const addList = () => {
    r.shifts.map(i => {
      let date = new Date(i.startDate)
        .toDateString()
        .split(" ")
        .slice(0, 3);

      let hour = new Date(i.startDate).getHours();
      let min = new Date(i.startDate).getMinutes().toString();
      if (min.length === 1) {
        min = "0" + min;
      }

      //let mintue = new Date(i.startDate).getMinutes();
      if (hour < 12) {
        let result = `${hour}:${min} AM AEST`;
        date.push(result);
      } else {
        let result = `${hour - 12}:${min} PM AEST`;
        date.push(result);
      }
      workHour.push(date);
      return null;
    });
  };

  addList();
  const totalPage = Math.ceil(workHour.length / 4);
  const modify = (s, e) => {
    let res = "";
    res = `${s[0]}, ${s[1]} ${s[2]} - ${e[0]}, ${e[1]} ${e[2]}`;
    return res;
  };
  const workPeriod = modify(startDate, endDate);

  return {
    type: constants.DETAIL_GET,
    branch: branch,
    title: title,
    companyName: companyName,
    wagePerHour: wagePerHour,
    location: location,
    branchPhoneNumber: branchPhoneNumber,
    workPeriod: workPeriod,
    workHour: fromJS(workHour),
    totalPage: totalPage
  };
};
