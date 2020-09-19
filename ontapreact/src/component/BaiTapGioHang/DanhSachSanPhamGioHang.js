import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DanhSachSanPhamGioHang extends Component {
  render() {
    let { mangSanPham } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-md-4" key={index}>
                <SanPhamGioHang sanPham={sanPham} />;
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
