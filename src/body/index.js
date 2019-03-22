import React from "react";
import "antd/dist/antd.css";
import {
  MainWrapper,
  JobAvaliable,
  Description,
  AvaliableButton,
  Pict,
  DetailDescription,
  DetailTimeTable,
  Location,
  Contact,
  Footer,
  FooterBtn
} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Button } from "antd";
import { Link } from "react-router-dom";

class Body extends React.Component {
  state = {
    id: "5775d8e18a488e6c5bb08c13"
  };
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
      page
    } = this.props;
    return (
      <MainWrapper>
        <JobAvaliable>
          <Link to={"/"}>
            <AvaliableButton>Jobs Available</AvaliableButton>
          </Link>
        </JobAvaliable>
        <Description>
          <Pict />
          <DetailDescription>
            <h3>{title}</h3>
            <h4>{companyName}</h4>
            <p>{`$${wagePerHour}/hour`}</p>
            <p>{workPeriod}</p>
          </DetailDescription>
        </Description>
        <DetailTimeTable>
          {/* {console.log(this.props.match.params.id)} */}
          <h1>If you take this job you are agreeing to work ALL DAYS</h1>
          {this.getListArea().map(i => {
            return i;
          })}
          <Button
            type="primary"
            size="small"
            style={{ width: "60px", textAlign: "center", margin: "5px auto" }}
            className="antButton"
            onClick={() => {
              this.props.handChagePage(page, totalPage);
            }}
          >
            {`${page}/${totalPage}`}
          </Button>
        </DetailTimeTable>
        <Location>
          <h4>Location</h4>
          <p>{location}</p>
        </Location>
        <Contact>
          <h4>Branch</h4>
          <h4>{branch}</h4>
          <p>{`(${branchPhoneNumber}) 922-4240`} </p>
        </Contact>
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
  getListArea = () => {
    const newList = [];
    if (this.props.workHour.length) {
      for (let i = (this.props.page - 1) * 4; i < this.props.page * 4; i++) {
        if (this.props.workHour[i]) {
          newList.push(
            <p key={this.props.workHour[i]}>{`${this.props.workHour[i][0]}, ${
              this.props.workHour[i][1]
            } ${this.props.workHour[i][2]} ${this.props.workHour[i][3]}`}</p>
          );
        }
      }
    }
    return newList;
  };

  // componentDidMount() {
  //   window.addEventListener("resize", this.getHeight);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.getHeight);
  // }
  // getHeight = () => {
  //   this.setState({ height: window.innerHeight - 100 });
  // };
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
