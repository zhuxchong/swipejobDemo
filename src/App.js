import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import Home from "./home";
import store from "./store";
import { Provider } from "react-redux";
import { GloalStyle } from "./style";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GloalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" exact component={Body} />
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
