import React, { Component } from "react";
import phoneData from "../../../data/phoneData.json";
import SanPham from "./SanPham";
export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: phoneData[0],
    };
  }

  renderSanPham = () => {
    return phoneData.map((dt, index) => {
      return <SanPham key={index} dt={dt} xemChiTiet={this.xemChiTiet} />;
    });
  };

  // Xử lý nút xem chi tiết
  xemChiTiet = (sp) => {
    this.setState({
      sanPhamChiTiet: sp,
    });
  };

  render() {
    let { sanPhamChiTiet } = this.state;
    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập truyền Function</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-md-6 text-center">
            <h3>{sanPhamChiTiet.tenSP}</h3>
            <img src={sanPhamChiTiet.hinhAnh} width={270} height={300} />
          </div>
          <div className="col-md-6">
            <h3>Thông số kĩ thuật</h3>
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <th>{sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <th>{sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước</th>
                <th>{sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau</th>
                <th>{sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>Ram</th>
                <th>{sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>Rom</th>
                <th>{sanPhamChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
