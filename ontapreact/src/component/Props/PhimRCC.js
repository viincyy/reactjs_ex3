import React, { Component } from "react";

export default class PhimRCC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const {phim_input} = this.props;
    const { hinhAnh, tenPhim, biDanh, moTa } = this.props.phim_input;
    return (
      <div className="card text-white bg-secondary">
        <img
          className="card-img-top"
          src={hinhAnh}
          alt={biDanh}
          width={200}
          height={350}
        />
        <div className="card-body">
          <h4 className="card-title">{tenPhim}</h4>
          <p className="card-text">
            {moTa.length > 100 ? moTa.substr(0, 100) + "..." : moTa}
          </p>
          <button className="btn btn-warning">Chi tiết phim</button>
        </div>
      </div>
    );
  }
}
