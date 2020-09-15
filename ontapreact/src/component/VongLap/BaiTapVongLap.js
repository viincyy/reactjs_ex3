import React, { Component } from "react";

export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "IphoneX", gia: 1000 },
        { maSP: 2, tenSP: "Huawei Mate 30 Pro", gia: 2000 },
        { maSP: 3, tenSP: "Samsung Galaxy Note 10", gia: 3000 },
      ],
    };
  }

  renderSanPham = () => {
    // Sử dụng map để tạo động các tag jsx từ mảng
    return this.state.mangSanPham.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
        </tr>
      );
    });

    // for (let i = 0; i < this.state.mangSanPham.length; i++) {
    //   let sanPham = this.state.mangSanPham[i];
    //   contentTable.push(
    //     <tr key={i}>
    //       <td>{sanPham.maSP}</td>
    //       <td>{sanPham.tenSP}</td>
    //       <td>{sanPham.gia}</td>
    //     </tr>
    //   );
    // }
    // return contentTable;
  };
  render() {
    return (
      <div className="container">
        <h3 className="bg-dark p-5 text-center text-white">
          Demo vòng lặp React
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>{this.renderSanPham()}</tbody>
        </table>
      </div>
    );
  }
}
