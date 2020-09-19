import React, { Component } from "react";

export default class BaiTapState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/brown.png",
    };
  }

  changeColor = (color) => {
    let imgSource = "";
    switch (color) {
      case "brown":
        imgSource = "./img/brown.png";
        break;
      case "white":
        imgSource = "./img/white.png";
        break;
    }
    this.setState(
      {
        img: imgSource,
      },
      () => {
        console.log(color);
      }
    );
  };
  render() {
    const styleButton = {
      color: "#fff",
      marginLeft: "5px",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Color</h3>
            <br />
            <img src={this.state.img} width={300} height={200} />
          </div>
          <div className="col-md-6">
            <h3>Pick Color</h3>
            <button
              onClick={() => this.changeColor("brown")}
              className="btn btn-dark"
              style={styleButton}
            >
              Brown
            </button>
            <button
              onClick={() => this.changeColor("white")}
              className="btn btn-secondary"
              style={styleButton}
            >
              White
            </button>
          </div>
        </div>
      </div>
    );
  }
}
