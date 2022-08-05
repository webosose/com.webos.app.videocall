// Copyright (c) 2016-2018 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { Panel } from "@enact/sandstone/Panels";
import Button from "@enact/sandstone/Button";
import HeaderComponent from "../components/HeaderComponent";
import MeetingImage from "../../assets/Meeting Room Logo.png";
import Image from "@enact/sandstone/Image";
import "../styles/Home.less";
import "../styles/Header.less";
import LS2Request from "@enact/webos/LS2Request";
// import lunaAction from "./lunaActions";

class HomePanel extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick = (data) => {
    if (data === "webex") {
      console.log("reached webex");
      const req = new LS2Request();
      req.send({
        service: "luna://com.webos.applicationManager",
        method: "launch",
        parameters: {
          id: "com.webos.app.enactbrowser",
          params: {
            target: "https://lgehq.webex.com/",
          },
        },
        subscribe: true,
        onSuccess: (res) => {
          console.log("success result is ===> ", res);
        },
        onFailure: (res) => {
          console.log("failure result is ===> ", res);
        },
      });
    } else {
      const req = new LS2Request();
      req.send({
        service: "luna://com.webos.applicationManager",
        method: "launch",
        parameters: {
          id: "com.webos.app.enactbrowser",
          params: {
            target: "https://teams.microsoft.com/",
          },
        },
        subscribe: true,
        onSuccess: (res) => {
          console.log("success result is ===> ", res);
        },
        onFailure: (res) => {
          console.log("failure result is ===> ", res);
        },
      });
      // return luna-send -n 1 -f palm://com.webos.service.applicationmanager/launch '{"id":"com.webos.app.enactbrowser", "params": {"target":"https://www.google.com", "displayAffinity": 0 }}'
    }
  };

  render() {
    return (
      <>
        <Panel noCloseButton>
          <HeaderComponent />
          <hr className="homeDivider" />
          <div className="ButtonSet">
            <Image src={MeetingImage} alt="" className="MeetingImage" />
            <Button
              id="JoinButton"
              backgroundOpacity="transparent"
              size="small"
              onClick={() => this.handleClick("webex")}  	// eslint-disable-line react/jsx-no-bind
            >
              Open with Webex
            </Button>
            <Button
              id="JoinButton"
              backgroundOpacity="transparent"
              size="small"
              onClick={() => this.handleClick("teams")}  // eslint-disable-line react/jsx-no-bind
            >
              Open with Teams
            </Button>
          </div>
        </Panel>
      </>
    );
  }
}

export default HomePanel;
