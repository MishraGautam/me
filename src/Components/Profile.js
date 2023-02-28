import React from "react";
import ProfileImage from "./ProfileImage";
import { Container, Row, Col, Button } from "reactstrap";
import ProfileDetails from "./ProfileDetails";
import { Name } from "../Constants";
class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Row>
          <Col>
            <ProfileImage />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="name"> {Name} </h1>
            <h4 className="name">Sr. Software Engineer</h4>
            <h5 className="name">Full stack developer (MERN)</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileDetails />
            <div class="footer-icons">
              <a
                className="socialicon"
                href="https://www.linkedin.com/in/gautam-mishra-846655149"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/really__famous?igshid=ZDdkNTZiNTM="
                target="_blank"
                className="socialicon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/gautamfamous?t=pa7J3w7VYTMAJdmmH24Tmg&s=09"
                target="_blank"
                className="socialicon"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/MishraGautam"
                className="socialicon"
                target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Button className='mt-4 mb-4 btn-dnld' href="https://drive.google.com/file/d/1az-VXPOy49x3dSLTVS1d9NJEjN-kVGWc/view?usp=sharing" target="_blank" color="info"><b>Download My Resume</b></Button>
      </div>
    );
  }
}

export default Profile;
