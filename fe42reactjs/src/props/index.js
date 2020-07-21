import React, { Component } from "react";
import ClassProps from "./classProps";
import FunctionProps from "./functionProps";

export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
      lop: "FE42"
    };
  }

  render() {
    const { username, lop } = this.state;
    return (
      <div>
        <h3 className="title">* Props</h3>
        <ClassProps name={username} lop={lop} />
        <ClassProps name="Cybersoft" lop="Fe42" />
        <ClassProps name="Hao" lop="Fe42" />
        <ClassProps name="Kiet" lop="Fe42" />

        {/* <FunctionProps name={username} lop={lop} /> */}
        <FunctionProps>
          <div>
            <h3>Hello Cybersoft</h3>
            <p>Dinh Phuc Nguyen</p>
          </div>
        </FunctionProps>
      </div>
    );
  }
}
