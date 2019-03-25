import React from "react";
import { DetailTimeTableWrapper } from "./style";
import { Button } from "antd";

class DetailTimeTable extends React.Component {
  render() {
    const { page, totalPage } = this.props;
    return (
      <DetailTimeTableWrapper>
        {/* {console.log(this.props.match.params.id)} */}
        <h1>If you take this job you are agreeing to work ALL DAYS</h1>
        <Button
          type="primary"
          size="small"
          style={{ width: "60px", textAlign: "center", margin: "10px auto" }}
          className="antButton"
          onClick={() => {
            this.handleChagePage(page, totalPage);
          }}
        >
          {`${page}/${totalPage}`}
        </Button>
        {this.getListArea().map(i => {
          return i;
        })}
      </DetailTimeTableWrapper>
    );
  }
  getListArea = () => {
    const newList = [];
    //console.log(this.props.workHour);
    if (this.props.workHour.length) {
      for (let i = (this.props.page - 1) * 4; i < this.props.page * 4; i++) {
        if (this.props.workHour[i]) {
          newList.push(
            <p key={this.props.workHour[i]} className="detailTime">{`${
              this.props.workHour[i][0]
            }, ${this.props.workHour[i][1]} ${this.props.workHour[i][2]} ${
              this.props.workHour[i][3]
            }`}</p>
          );
        }
      }
    }
    return newList;
  };
  handleChagePage = (page, totalPage) => {
    this.props.handChagePage(page, totalPage);
  };
  //<div>123{console.log(props)}</div>
}
export default DetailTimeTable;
