import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  const userType = localStorage.getItem('userType');

  if (userType === "admin") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
          <Menu.Item key="mail">
            <a href="/">Home</a>
          </Menu.Item>

          <SubMenu key="workshop" title="Workshops">
            <Menu.Item key="workshops">
              <a href="/workshops">Workshops</a>
            </Menu.Item>
            <Menu.Item key="addWorkshop">
              <a href="/uploadWorkshop">Add Workshop</a>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="paper" title="Researches">
            <Menu.Item key="papers">
              <a href="/papers">Research Papers</a>
            </Menu.Item>
            <Menu.Item key="addWorkshop">
              <a href="/uploadPaper">Call for papers</a>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="downloads">
            <a href="/downloads">Downloads</a>
          </Menu.Item>

          <SubMenu key="moderate" title="Moderate">
            <Menu.Item key="editConf">
              <a href="/conferenceEdit">Edit Conference Details</a>
            </Menu.Item>
            <Menu.Item key="appConf">
              <a href="/conferenceReview">Approve Conference Details</a>
            </Menu.Item>
            <Menu.Item key="review">
              <a href="/reviewResearches">Review Papers</a>
            </Menu.Item>
              <Menu.Item key="reviewwr">
                  <a href="/reviewWorkshops">Review Workshops</a>
              </Menu.Item>
          </SubMenu>
        </Menu>
    )
  }else if (userType === "reviewer") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="workshop" title="Workshops">
                <Menu.Item key="workshops">
                    <a href="/workshops">Workshops</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="paper" title="Researches">
                <Menu.Item key="papers">
                    <a href="/papers">Research Papers</a>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="downloads">
                <a href="/downloads">Downloads</a>
            </Menu.Item>

            <SubMenu key="moderate" title="Moderate">
                <Menu.Item key="review">
                    <a href="/reviewResearches">Review Papers</a>
                </Menu.Item>
                <Menu.Item key="reviewwr">
                    <a href="/reviewWorkshops">Review Workshops</a>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
  }else if (userType === "editor") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="workshop" title="Workshops">
                <Menu.Item key="workshops">
                    <a href="/workshops">Workshops</a>
                </Menu.Item>

            </SubMenu>

            <SubMenu key="paper" title="Researches">
                <Menu.Item key="papers">
                    <a href="/papers">Research Papers</a>
                </Menu.Item>

            </SubMenu>

            <Menu.Item key="downloads">
                <a href="/downloads">Downloads</a>
            </Menu.Item>

            <SubMenu key="moderate" title="Moderate">
                <Menu.Item key="editConf">
                    <a href="/conferenceEdit">Edit Conference Details</a>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
  }else if(userType === "attendee") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="workshop" title="Workshops">
                <Menu.Item key="workshops">
                    <a href="/workshops">Workshops</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="paper" title="Researches">
                <Menu.Item key="papers">
                    <a href="/papers">Research Papers</a>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="downloads">
                <a href="/downloads">Downloads</a>
            </Menu.Item>
        </Menu>
    )
  }else if(userType === "presenter") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="workshop" title="Workshops">
                <Menu.Item key="workshops">
                    <a href="/workshops">Workshops</a>
                </Menu.Item>
                <Menu.Item key="addWorkshop">
                    <a href="/uploadWorkshop">Add Workshop</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="paper" title="Researches">
                <Menu.Item key="papers">
                    <a href="/papers">Research Papers</a>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="downloads">
                <a href="/downloads">Downloads</a>
            </Menu.Item>
        </Menu>
    )
  }else if(userType === "researcher") {
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="workshop" title="Workshops">
                <Menu.Item key="workshops">
                    <a href="/workshops">Workshops</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="paper" title="Researches">
                <Menu.Item key="papers">
                    <a href="/papers">Research Papers</a>
                </Menu.Item>
                <Menu.Item key="addWorkshop">
                    <a href="/uploadPaper">Call for papers</a>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="downloads">
                <a href="/downloads">Downloads</a>
            </Menu.Item>

        </Menu>
    )
  }else{
      console.log(userType);
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>

            <SubMenu key="workshop" title="Workshops">
                <Menu.Item key="workshops">
                    <a href="/workshops">Workshops</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="paper" title="Researches">
                <Menu.Item key="papers">
                    <a href="/papers">Research Papers</a>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="downloads">
                <a href="/downloads">Downloads</a>
            </Menu.Item>
        </Menu>
    )
  }
}

export default LeftMenu

