import React from "react";
import {
  Jumbotron,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Awards from "./Awards";
import OSContrib from "./OSContrib";
import About from "./About";
import GitHubProjects from "./GitHubProjects";

export default class CustomTabPane extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="customTabPane">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              SKILLS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              EXPERIENCE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              EDUCATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              CERTIFICATIONS
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              OPEN-SOURCE CONTRIBUTIONS
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              PROJECTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggle("7");
              }}
            >
              ABOUT ME
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <Jumbotron>
                  <Skills />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <Jumbotron>
                  <Experience />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col>
                <Jumbotron>
                  <Education />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col>
                <Jumbotron>
                  <Awards />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col>
                <Jumbotron>
                  <OSContrib />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col>
                <Jumbotron>
                  <GitHubProjects />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col>
                <Jumbotron>
                  <About />
                </Jumbotron>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
