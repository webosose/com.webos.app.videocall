import { Header } from "@enact/sandstone/Panels";
import { Component } from "react";
import "../../styles/Home.less";

class HeaderComponent extends Component {
  render() {
    return (
      <>
        <Header type="compact" title="Video Call App" />
      </>
    );
  }
}

export default HeaderComponent;
