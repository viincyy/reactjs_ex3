import React, { Component } from "react";
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";
import ModalGioHangRedux from "./ModalGioHangRedux";

export default class BTGioHangRedux extends Component {
  render() {
    return (
      <div>
        <h3 className="text-primary text-center">Bài tâp giỏ hàng Redux</h3>
        <ModalGioHangRedux />
        <DanhSachSanPhamRedux />
      </div>
    );
  }
}
