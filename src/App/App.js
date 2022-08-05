import { Component } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import HomePanel from "../views/HomePanel";
import "./attachErrorHandler";
import "./App.module.less";

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
