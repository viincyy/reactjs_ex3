import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import phoneData from "../../data/phoneData.json";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
    };
  }
  render() {
    let tongSoLuong = this.state.gioHang.reduce(
      (tongSoLuong, spGioHang, index) => {
        return (tongSoLuong += spGioHang.soLuong);
      },
      0
    );
    return (
      <div className="container">
        <h3 className="text-center text-sucess">Bài tập giỏ hàng</h3>
        <ModalGioHang gioHang={this.state.gioHang} />
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang mangSanPham={phoneData} />
      </div>
    );
  }
}
