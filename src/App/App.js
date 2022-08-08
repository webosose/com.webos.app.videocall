import { Component } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import "./attachErrorHandler";
import "./App.module.less";
import HomePanel from "../views/HomePanel/HomePanel";

class App extends Component {
  render() {
    return (
      <>
          <HomePanel />
      </>
    );
  }
}

export default ThemeDecorator(App);
