import { data } from "jquery";
import React, { Component } from "react";
import dataPhone from "../../../data/phoneData.json";
import SanPhamRedux from "./SanPhamRedux";
export default class DanhSachSanPhamRedux extends Component {
  // Viết phương thức render sản phẩm
  rendersanPham = () => {
    return dataPhone.map((sanPham, index) => {
      return (
        <div className="col-md-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-primary text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.rendersanPham()}</div>
      </div>
    );
  }
}
