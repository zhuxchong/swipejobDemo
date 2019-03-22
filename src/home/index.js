import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <Link to={"detail/5775d8e18a488e6c5bb08c13"}>
        {/*id should get from ajax res*/}
        <div
          style={{ margin: "10px 0", fontSize: "50px", textAlign: "center" }}
        >
          demo page
        </div>
      </Link>
    );
  }
}
export default Home;
