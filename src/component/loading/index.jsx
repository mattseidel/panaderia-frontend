import React, { Component } from "react";
import './style.css'

class Loading extends Component {
  render() {
    return (
      <div class="lds-circle">
        <div></div>
      </div>
    );
  }
}

export default Loading;
