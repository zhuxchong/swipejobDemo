import React from "react";
import "antd/dist/antd.css";
import {
  MainWrapper,
  JobAvaliable,
  AvaliableButton,
  Footer,
  FooterBtn
} from "./style";
import DetailTimeTable from "./DetailTimeTable";
import Description from "./Description";
import Location from "./Location";
import Contact from "./Contact";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import { Link } from "react-router-dom";
//import Title from "antd/lib/skeleton/Avatar";

class Body extends React.PureComponent {
  render() {
    const {
      title,
      companyName,
      wagePerHour,
      location,
      branch,
      branchPhoneNumber,
      workPeriod,
      totalPage,
      page,
      workHour
    } = this.props;
    return (
      <MainWrapper>
        <JobAvaliable>
          <Link to={"/"}>
            <AvaliableButton>Jobs Available</AvaliableButton>
          </Link>
        </JobAvaliable>
        <Description
          title={title}
          companyName={companyName}
          wagePerHour={wagePerHour}
          workPeriod={workPeriod}
        />
        <DetailTimeTable
          page={page}
          totalPage={totalPage}
          workHour={workHour}
          handChagePage={this.props.handChagePage}
        />
        <Location location={location} />
        <Contact branch={branch} branchPhoneNumber={branchPhoneNumber} />
        <Footer>
          <FooterBtn className="reject">NO THANKS</FooterBtn>
          <FooterBtn className="accept">I'LL TAKE IT</FooterBtn>
        </Footer>
      </MainWrapper>
    );
  }
  componentDidMount() {
    this.props.getData(this.props.match.params.id);
  }
}
const mapStateToProps = state => {
  return {
    title: state.getIn(["body", "title"]),
    companyName: state.getIn(["body", "companyName"]),
    wagePerHour: state.getIn(["body", "wagePerHour"]),
    workHour: state.getIn(["body", "workHour"]).toJS(),
    location: state.getIn(["body", "location"]),
    branch: state.getIn(["body", "branch"]),
    workPeriod: state.getIn(["body", "workPeriod"]),
    branchPhoneNumber: state.getIn(["body", "branchPhoneNumber"]),
    totalPage: state.getIn(["body", "totalPage"]),
    page: state.getIn(["body", "page"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData(id) {
      dispatch(actionCreators.getDetail(id));
    },
    handChagePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
