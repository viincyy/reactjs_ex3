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

  // Thêm giỏ hàng
  themGioHang = (sanPham) => {
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      giaBan: sanPham.giaBan,
      hinhAnh: sanPham.hinhAnh,
      soLuong: 1,
    };

    // Kiểm tra xem đã tồn tại sp đó chưa
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (maSP) => {
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    // if(index !== -1){
    //   gioHangCapNhat.splice(index, 1);
    // }

    var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Tăng giảm số lượng
  tamGiangSoLuong = (maSP, tangGiam) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
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
        <ModalGioHang
          tamGiangSoLuong={this.tamGiangSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
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
        <DanhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          mangSanPham={phoneData}
        />
      </div>
    );
  }
}
