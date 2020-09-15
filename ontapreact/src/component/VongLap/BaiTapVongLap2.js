import React, { Component } from "react";
import data from "../../data/data.json";
export default class BaiTapVongLap2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }

  handleCard = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-md-4">
          <div className="card text-white bg-white">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.biDanh}
              width={250}
              height={350}
            />
            <div className="card-body">
              <h5 className="card-title text-dark">{phim.tenPhim}</h5>
              <p className="card-text text-dark">
                {phim.moTa.length > 100
                  ? phim.moTa.substr(0, 100) + "..."
                  : phim.moTa}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div class="container">
        <h3 className="bg-dark p-5 text-center text-white">Card Phim</h3>
        <div className="row">{this.handleCard()}</div>
      </div>
    );
  }
}
