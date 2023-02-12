import { Table } from "reactstrap";
import React from "react";
import * as Constants from "../Constants";
export default class ProfileDetails extends React.Component {
  render() {
    return (
      <>
        <div className="name">
          <h5 className="pt-4">Contact Details -</h5>
          <h5>
            <a href={`mailto:${Constants.EmailAddress}`}>{Constants.EmailAddress}</a>
          </h5>
          <h5>{Constants.PhoneNumber}</h5>
          <h5>{Constants.whatAppNumber}</h5>
          <h5>{Constants.Home}</h5>
        </div>
      </>
    );
  }
}
