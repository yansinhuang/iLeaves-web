import { BulletList } from "react-content-loader";
import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <div className="-loading -active">
            <div className="-loading-inner">Loading</div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
