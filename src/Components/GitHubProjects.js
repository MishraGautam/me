import React from "react";
import { Table } from "reactstrap";
import * as Constants from "../Constants";

export default class GitHubProjects extends React.Component {
  renderTableRows(obj) {
    return obj.map((x) => {
      return (
        <tr >
          <td> {x.sr} </td>
          <td> {x.projectName} </td>
          <td>
            {" "}
            <a href={x.projectLink}> {x.projectLink} </a>{" "}
          </td>
          <td> {x.languages} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="githubProjects">
        <Table bordered>
          <thead>
            <tr>
              <td>Sr. No.</td>
              <td>Project Name</td>
              <td>Live Status & Link</td>
              <td>Technology Used</td>
            </tr>
          </thead>
          <tbody>{this.renderTableRows(Constants.GithubProjects)}</tbody>
        </Table>
      </div>
    );
  }
}
